import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItineraryContext } from "../../global/itinerary/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import { AttributionsSection } from "../Attributions/Attributions.style";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import CitySection from "./CitySection";
import {
  ButtonAccommodation,
  ItineraryData,
  SectionItinerary,
} from "./Itinerary.style";
import LandmarkSection from "./LandmarkSection";

function Itinerary() {
  const navigate = useNavigate();
  const { stateGlobalItinerary } = useContext(ItineraryContext);

  const itineraryValueArray = stateGlobalItinerary.itineraryValue || [];
  console.log("itineraryValueArray", itineraryValueArray);

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue || [];
  console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

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

  return (
    <SectionItinerary loc="SectionItinerary">
      <ItineraryData loc="ItineraryData">
        <CitySection />
        <LandmarkSection />
      </ItineraryData>
      {itineraryValueArray.length === 0 &&
        itineraryLandmarkValueArray.length === 0 && (
          <InfoSection loc="InfoSection">
            <InfoUser loc="InfoUser">
              You didn't choose any itinerary yet! Go to "I Want To Explore
              Offers" and select a destination that you like to know more about!
            </InfoUser>
            <ButtonInfo loc="ButtonInfo" to={`/home`}>
              Take me back to Home screen!
            </ButtonInfo>
          </InfoSection>
        )}
      {(itineraryValueArray.length !== 0 ||
        itineraryLandmarkValueArray.length !== 0) && (
        <>
          <ButtonAccommodation
            loc="ButtonAccommodation"
            onClick={() => goAccomm()}
          >
            I want to book accommodation!
          </ButtonAccommodation>
          <AttributionsSection loc="AttributionsSection">
            Copyright:
            <br />
            Background vintage paper:
            <a href="https://www.freepik.com/free-vector/old-paper-background-with-stains_897940.htm#fromView=search&page=1&position=1&uuid=5324dae9-1f13-4763-a6da-3e59b6e6be57">
              {" "}
              Image by kjpargeter on Freepik
            </a>
          </AttributionsSection>
        </>
      )}
    </SectionItinerary>
  );
}

export default Itinerary;
