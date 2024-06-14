import { useContext } from "react";
import { ItineraryContext } from "../../global/itinerary/context";
import CityCard from "../CityCard/CityCard";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import { SectionItineraryData } from "./Itinerary.style";

function Itinerary() {
  const { stateGlobalItinerary } = useContext(ItineraryContext);

  const itineraryValueArray = stateGlobalItinerary.itineraryValue;

  console.log("itineraryValueArray", itineraryValueArray);

  return (
    <>
      <SectionItineraryData loc="SectionItineraryData">
        {itineraryValueArray.length === 0 ? (
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
        {stateGlobalItinerary &&
          itineraryValueArray?.map((element, index) => (
            <CityCard key={index} index={index} {...element} />
          ))}
      </SectionItineraryData>
    </>
  );
}
export default Itinerary;
