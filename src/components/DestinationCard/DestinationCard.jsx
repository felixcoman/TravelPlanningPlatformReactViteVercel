import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { itineraryLandmarkPlus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useToast from "../../hooks/useToast";
import { ButtonLandmark } from "../DestinationCard/DestinationCard.style";

function DestionationCard({ name, image, description, popularity }) {
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
  console.log("itineraryValueArray", itineraryLandmarkValueArray);

  const [unique, setUnique] = useState(true);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const handleAddItineraryLandmark = (name, event) => {
    console.log("HANDLE ADD ITINERARY LANDMARK");

    const addObject = { name };
    console.log("ADD OBJECT", addObject);

    const isDuplicate = itineraryLandmarkValueArray.some(
      (element) => element.name === addObject.name
    );

    if (isDuplicate) {
      console.log("cannot be added");
      setUnique(false);
      setShowA(true);
      event.preventDefault();
    } else {
      console.log("can be added");
      setUnique(true);
      dispatchItinerary(itineraryLandmarkPlus({ name }));
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt="Image of landmark" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ButtonLandmark
            loc="ButtonLandmark"
            onClick={(event) => {
              handleAddItineraryLandmark(name, event);
            }}
            // to={`/itinerary`}
          >
            Save landmark to my itinerary!
          </ButtonLandmark>
        </Card.Body>
      </Card>
      {!unique &&
        useToast(
          "Intinerary",
          "This item is already in the Itinerary!",
          "my-toast",
          showA,
          toggleShowA
        )}
    </>
  );
}
export default DestionationCard;
