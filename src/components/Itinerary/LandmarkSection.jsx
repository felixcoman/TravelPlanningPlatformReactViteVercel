import { useContext, useState } from "react";
import { itineraryLandmarkMinus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import LandmarkCard from "../LandmarkCard/LandmarkCard";

function LandmarkSection() {
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue || [];
  console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);

  const [clicked, setClicked] = useState(true);
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);

  const handleDelete = (index) => {
    setClicked(true);
    dispatchItinerary(itineraryLandmarkMinus(index));
    setShow(false);
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
