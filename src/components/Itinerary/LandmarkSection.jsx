import { useContext, useState } from "react";
import { itineraryLandmarkMinus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import LandmarkCard from "../LandmarkCard/LandmarkCard";

function LandmarkSection() {
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const { localData } = useLocalStorage("user");

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue || [];
  console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);

  const [clicked, setClicked] = useState(true);
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);

  const handleUpdateServer = (indexServer) => {
    fetch(`http://localhost:3001/users/${localData}`)
      .then((response) => response.json())
      .then((userData) => {
        // Filter out the itinerary object at the specified index - filters out element that needs to be deleted from server
        const updatedItinerary = userData.itinerarylandmark.filter(
          (e, i) => i !== indexServer
        );

        // Send the updated data back to the server - remaining elements
        fetch(`http://localhost:3001/users/${localData}`, {
          method: "PUT",
          body: JSON.stringify({
            ...userData,
            itinerarylandmark: updatedItinerary,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.error("Error updating user data:", error));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const handleDelete = (index) => {
    setClicked(true);
    setShow(false);
    dispatchItinerary(itineraryLandmarkMinus(index));
    //specifying index server because element sequence is reversed from that of the global array (first added element is on last position in global array but on first position on server)
    const indexServer =
      stateGlobalItinerary.itineraryLandmarkValueArray.length - 1 - index;
    handleUpdateServer(indexServer);
  };

  return (
    <>
      {stateGlobalItinerary &&
        itineraryLandmarkValueArray?.map((element, index) => (
          <LandmarkCard
            key={index}
            index={index}
            handleDelete={handleDelete}
            show={show && showId === index}
            setShow={setShow}
            setShowId={setShowId}
            clicked={clicked}
            setClicked={setClicked}
            {...element}
          />
        ))}
    </>
  );
}
export default LandmarkSection;
