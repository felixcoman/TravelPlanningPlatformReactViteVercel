import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { itineraryLandmarkPlus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
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

  const handleUpdateItinerary = (updateData) => {
    fetch(`http://localhost:3001/users/${localData}`)
      .then((response) => response.json())
      .then((userData) => {
        // Check if the user has a "itinerary" array, if not, initialize it
        const newData = userData.itinerarylandmark
          ? [...userData.itinerarylandmark, updateData]
          : [updateData];
        // Update the user data with the new itinerary
        const updatedUserData = { ...userData, itinerarylandmark: newData };

        fetch(`http://localhost:3001/users/${localData}`, {
          method: "PUT",
          body: JSON.stringify(updatedUserData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const checkDuplicate = (arr, obj) =>
    arr.some(
      (element) =>
        element.country === obj.country &&
        element.city === obj.city &&
        element.name === obj.name
    );

  const handleAddItineraryLandmark = (country, city, name, event) => {
    console.log("HANDLE ADD ITINERARY LANDMARK");

    const addObject = { country, city, name };

    console.log("ADD OBJECT", addObject);

    if (checkDuplicate(itineraryLandmarkValueArray, addObject)) {
      console.log("cannot be added");
      notify(false, name, "my-landmark-toast");
      event.preventDefault();
    } else {
      console.log("can be added");

      dispatchItinerary(itineraryLandmarkPlus({ country, city, name }));
      handleUpdateItinerary(addObject);
      notify(true, name, "my-landmark-toast");
    }
  };
  return (
    <Card className="tangerine-bold">
      <ImgWrapper loc="ImgWrapper">
        <Card.Img variant="top" src={image} alt="Image of landmark" />
        {attributions && <Attributions attributions={attributions[0]} />}
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
