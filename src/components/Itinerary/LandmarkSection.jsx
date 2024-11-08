import { useContext, useState } from "react";
import { itineraryLandmarkMinus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import useRemoveData from "../../hooks/useRemoveData";
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
  const [indexServer, setIndexServer] = useState(null);

  const { error, loading } = useRemoveData(
    localData,
    indexServer,
    setIndexServer,
    "itinerarylandmark"
  );
  console.log("error HOOK", error, "loading HOOK", loading);

  const handleDelete = (index) => {
    setClicked(true);
    setShow(false);
    dispatchItinerary(itineraryLandmarkMinus(index));
    //specifying index server because element sequence is reversed from that of the global array (first added element is on last position in global array but on first position on server)
    setIndexServer(
      stateGlobalItinerary.itineraryLandmarkValue.length - 1 - index
    );
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
