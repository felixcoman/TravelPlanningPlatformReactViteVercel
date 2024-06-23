import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { itineraryLandmarkPlus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useToast from "../../global/useToast";
import { ButtonLandmark } from "../DestinationCard/DestinationCard.style";

function DestionationCard({
  name,
  country,
  city,
  image,
  description,
  popularity,
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

  const [unique, setUnique] = useState(true);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const [onAdd, setOnAdd] = useState(false);

  const handleAddItineraryLandmark = (country, city, name, event) => {
    setOnAdd(true);
    console.log("HANDLE ADD ITINERARY LANDMARK");

    const addObject = { country, city, name };
    console.log("ADD OBJECT", addObject);

    const isDuplicate = itineraryLandmarkValueArray.some(
      (element) =>
        element.country === addObject.country &&
        element.city === addObject.city &&
        element.name === addObject.name
    );

    if (isDuplicate) {
      console.log("cannot be added");
      setUnique(false);
      setShowA(true);
      event.preventDefault();
    } else {
      console.log("can be added");
      setUnique(true);
      dispatchItinerary(itineraryLandmarkPlus({ country, city, name }));
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt="Image of landmark" />
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
            Save landmark to my itinerary!
          </ButtonLandmark>
        </Card.Body>
      </Card>
      {!unique &&
        useToast(
          "Intinerary",
          `${name} is already in the Itinerary!`,
          "my-toast",
          showA,
          toggleShowA
        )}
      {unique &&
        onAdd &&
        useToast(
          "Intinerary",
          `Succes! ${name} was added to the Itinerary!`,
          "my-toast",
          showA,
          toggleShowA
        )}
    </>
  );
}
export default DestionationCard;
