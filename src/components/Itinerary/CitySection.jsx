import { useContext, useState } from "react";
import { itineraryMinus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import CityCard from "../CityCard/CityCard";

function CitySection() {
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const itineraryValueArray = stateGlobalItinerary.itineraryValue || [];
  console.log("itineraryValueArray", itineraryValueArray);

  const [clicked, setClicked] = useState(true);
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);

  const handleDelete = (index) => {
    setClicked(true);
    dispatchItinerary(itineraryMinus(index));
    setShow(false);
  };

  return (
    <>
      {stateGlobalItinerary &&
        itineraryValueArray?.map((element, index) => (
          <CityCard
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
export default CitySection;
