import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ItineraryContext } from "../../global/itinerary/context";
import containsObject from "../../global/utilities/containsObject";
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
  setAddData,
  disableUI,
  setDisableUI,
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

  // this function handles 2 cases and calls different separate functions depending on which case is true: if there is duplicate it notifies the user and prevents the onClick event; else it dispatches data to State Management, adds intinerary data to user on server and notifies user that data was added

  const handleAddItineraryLandmark = (event) => {
    if (disableUI) return;
    console.log("HANDLE ADD ITINERARY LANDMARK");

    const addObject = { country, city, name };
    console.log(
      "itineraryLandmarkValueArray",
      itineraryLandmarkValueArray,
      "addObject",
      addObject
    );
    console.log(
      "REZULTAT COMPARATIE",
      containsObject(itineraryLandmarkValueArray, addObject)
    );

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
      setAddData(addObject); // launches useAddData
      setDisableUI(true);
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
          onClick={(event) => handleAddItineraryLandmark(event)}
          disabled={disableUI}
        >
          Save this landmark to My Itinerary!
        </ButtonLandmark>
      </Card.Body>
    </Card>
  );
}
export default DestinationCard;
