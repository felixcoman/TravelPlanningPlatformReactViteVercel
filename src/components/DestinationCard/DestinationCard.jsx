import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { itineraryLandmarkPlus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import containsObject from "../../global/utilities/containsObject";
import useLocalStorage from "../../hooks/useLocalStorage";
import Attributions from "../Attributions/Attributions";
import {
  ButtonLandmark,
  ImgWrapper,
} from "../DestinationCard/DestinationCard.style";

function DestinationCard({
  name,
  country,
  city,
  image,
  description,
  popularity,
  attributions,
  showToast,
  enqueue,
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

  // this function handles 2 cases and calls different separate functions depending on which case is true: if there is duplicate it notifies the user and prevents the onClick event; else it dispatches data to State Management, adds intinerary data to user on server and notifies user that data was added

  const handleAddItineraryLandmark = (event) => {
    console.log("HANDLE ADD ITINERARY LANDMARK");

    const addObject = { country, city, name };
    console.log("addObject", addObject);

    if (containsObject(itineraryLandmarkValueArray, addObject)) {
      showToast(
        "Itinerary",
        `${name} is already in the Itinerary!`,
        "my-warning-toast"
      );
      console.log("cannot be added");
      event.preventDefault();
    } else {
      console.log("can be added");
      enqueue(addObject, () => {
        dispatchItinerary(itineraryLandmarkPlus({ country, city, name }));
        showToast(
          "Itinerary",
          `Success! ${name} was added to the Itinerary!`,
          "my-info-toast"
        );
      });
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
