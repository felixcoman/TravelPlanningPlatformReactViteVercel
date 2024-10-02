import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  itineraryMinus,
  itineraryLandmarkMinus,
} from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import CityCard from "../CityCard/CityCard";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import LandmarkCard from "../LandmarkCard/LandmarkCard";
import {
  ButtonAccommodation,
  ItineraryData,
  SectionItinerary,
} from "./Itinerary.style";

function Itinerary() {
  const navigate = useNavigate();
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const itineraryValueArray = stateGlobalItinerary.itineraryValue || [];
  console.log("itineraryValueArray", itineraryValueArray);

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue || [];
  console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  const [clicked, setClicked] = useState(true);
  const [showC, setShowC] = useState(false);
  const [showL, setShowL] = useState(false);
  const [showIdC, setShowIdC] = useState(0);
  const [showIdL, setShowIdL] = useState(0);

  let accommodationArray = [];

  const checkDuplicate = (arr, obj) =>
    arr.some(
      (element) => element.country === obj.country && element.city === obj.city
    );

  const populateAccommondationArray = (arr, accommodationArray) => {
    arr.forEach((key) => {
      const addObject = { country: key.country, city: key.city };
      console.log(
        "key",
        key,
        "addObject",
        addObject,
        "key.country",
        key.country,
        "key.city",
        key.city
      );
      if (!checkDuplicate(accommodationArray, addObject)) {
        console.log("UNIC addObject", addObject);
        console.log("accommodationArray", accommodationArray);
        accommodationArray.push(addObject);
      }
    });
    return accommodationArray;
  };

  const goAccomm = () => {
    // let accommodationArray = [];
    console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);
    populateAccommondationArray(
      itineraryLandmarkValueArray,
      accommodationArray
    );
    console.log("FIRST accommodationArray", accommodationArray);
    console.log("itineraryValueArray", itineraryValueArray);
    populateAccommondationArray(itineraryValueArray, accommodationArray);
    console.log("SECOND accommodationArray", accommodationArray);
    console.log("GO ACCOMM");
    console.log("Navigating to: ", `/accommodation/${localData}`);
    console.log("State: ", { accommodationArray });
    navigate(`/accommodation`, {
      state: accommodationArray,
    });
  };
  const handleDeleteC = (indexC) => {
    setClicked(true);
    dispatchItinerary(itineraryMinus(indexC));
    setShowC(false);
  };
  const handleDeleteL = (indexL) => {
    setClicked(true);
    dispatchItinerary(itineraryLandmarkMinus(indexL));
    setShowL(false);
  };
  return (
    <SectionItinerary loc="SectionItinerary">
      <ItineraryData loc="ItineraryData">
        {stateGlobalItinerary &&
          itineraryValueArray?.map((element, indexC) => (
            <CityCard
              key={indexC}
              indexC={indexC}
              handleDeleteC={handleDeleteC}
              showC={showC && showIdC === indexC}
              setShowC={setShowC}
              setShowIdC={setShowIdC}
              clicked={clicked}
              setClicked={setClicked}
              {...element}
            />
          ))}
        {stateGlobalItinerary &&
          itineraryLandmarkValueArray?.map((element, indexL) => (
            <LandmarkCard
              key={indexL}
              indexL={indexL}
              handleDeleteL={handleDeleteL}
              showL={showL && showIdL === indexL}
              setShowL={setShowL}
              setShowIdL={setShowIdL}
              clicked={clicked}
              setClicked={setClicked}
              {...element}
            />
          ))}
      </ItineraryData>
      {itineraryValueArray.length === 0 &&
      itineraryLandmarkValueArray.length === 0 ? (
        <InfoSection loc="InfoSection">
          <InfoUser loc="InfoUser">
            You didn't choose any itinerary yet! Go to "I Want To Explore
            Offers" and select a destination that you like to know more about!
          </InfoUser>
          <ButtonInfo loc="ButtonInfo" to={`/home`}>
            Take me back to Home screen!
          </ButtonInfo>
        </InfoSection>
      ) : null}
      {(itineraryValueArray.length !== 0 ||
        itineraryLandmarkValueArray.length !== 0) && (
        <ButtonAccommodation
          loc="ButtonAccommodation"
          onClick={() => goAccomm()}
        >
          I want to book accommodation!
        </ButtonAccommodation>
      )}
    </SectionItinerary>
  );
}

export default Itinerary;
