import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { itineraryPlus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import { ButtonLandmark } from "../DestinationCard/DestinationCard.style";
import {
  ButtonInfo,
  InfoSection,
  InfoUser,
  SectionInfoButtons,
} from "../Explore/Explore.style";

function DestionationCard({ name, image, description, popularity }) {
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  console.log(
    "stateGlobalItinerary",
    stateGlobalItinerary,
    "dispatchItinerary",
    dispatchItinerary
  );

  const itineraryValueArray = stateGlobalItinerary.itineraryValue || [];
  console.log("itineraryValueArray", itineraryValueArray);

  const [unique, setUnique] = useState(true);

  const handleAddItineraryLandmark = (name, event) => {
    // console.log("itineraryValueArray", itineraryValueArray);
    console.log("HANDLE ADD ITINERARY LANDMARK");

    const addObject = { name };
    console.log("ADD OBJECT", addObject);

    const isDuplicate = itineraryValueArray.some(
      (element) => element.name === addObject.name
    );

    if (isDuplicate) {
      console.log("cannot be added");
      setUnique(false);
      event.preventDefault();
    } else {
      console.log("can be added");
      setUnique(true);
      dispatchItinerary(itineraryPlus({ name }));
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
            to={`/itinerary`}
          >
            Save landmark to my itinerary!
          </ButtonLandmark>
        </Card.Body>
      </Card>
      {!unique && (
        <InfoSection loc="InfoSection">
          <InfoUser loc="InfoUser">
            This item is already in the Itinerary!
          </InfoUser>
          <SectionInfoButtons loc="SectionInfoButtons">
            <ButtonInfo loc="ButtonInfo" to={`/home`}>
              I want to choose an other option from Home screen!
            </ButtonInfo>
            <ButtonInfo loc="ButtonInfo" to={`/itinerary`}>
              Ok, go to Itinerary!
            </ButtonInfo>
          </SectionInfoButtons>
        </InfoSection>
      )}
    </>
  );
}
export default DestionationCard;
