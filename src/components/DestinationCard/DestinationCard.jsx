import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { itineraryLandmarkPlus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import Attributions from "../Attributions/Attributions";
import {
  ButtonLandmark,
  ImgWrapper,
} from "../DestinationCard/DestinationCard.style";
import useAddData from "../../hooks/useAddData";

function DestinationCard({
  name,
  country,
  city,
  image,
  description,
  popularity,
  attributions,
  notify,
}) {
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  console.log(
    "stateGlobalItinerary",
    stateGlobalItinerary,
    "dispatchItinerary",
    dispatchItinerary
  );

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue || [];
  console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  const [addData, setAddData] = useState("");
  const [readyAdd, setReadyAdd] = useState(null);

  const { error, loading } = useAddData(
    readyAdd,
    setReadyAdd,
    localData,
    addData,
    setAddData,
    "itinerarylandmark"
  );
  console.log("error HOOK", error, "loading HOOK", loading);

  const checkDuplicate = (arr, obj) =>
    arr.some(
      (element) =>
        element.country === obj.country &&
        element.city === obj.city &&
        element.name === obj.name
    );

  const handleAddItineraryLandmark = (country, city, name, event) => {
    console.log("HANDLE ADD ITINERARY LANDMARK");

    setAddData({ country, city, name });

    if (checkDuplicate(itineraryLandmarkValueArray, addData)) {
      notify(false, name, "my-landmark-toast");
      setReadyAdd(false);
      console.log("cannot be added");
      event.preventDefault();
    } else {
      notify(true, name, "my-landmark-toast");
      dispatchItinerary(itineraryLandmarkPlus({ country, city, name }));
      setReadyAdd(true);
      console.log("can be added");
    }
  };
  return (
    <Card className="tangerine-bold">
      <ImgWrapper loc="ImgWrapper">
        <Card.Img variant="top" src={image} alt="Image of landmark" />
        {attributions && (
          <Attributions variant="card" attributions={attributions[0]} />
        )}
      </ImgWrapper>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Location: {city}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <ButtonLandmark
          loc="ButtonLandmark"
          onClick={(event) => {
            handleAddItineraryLandmark(country, city, name, event);
          }}
        >
          Save this landmark to My Itinerary!
        </ButtonLandmark>
      </Card.Body>
    </Card>
  );
}
export default DestinationCard;
