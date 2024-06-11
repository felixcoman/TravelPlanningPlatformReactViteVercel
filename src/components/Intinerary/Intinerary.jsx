import { useContext } from "react";
import { IntineraryContext } from "../../global/intinerary/context";
import CityCard from "../CityCard/CityCard";
import { SectionIntineraryData, InfoUser } from "./Intinerary.style";

function Intinerary() {
  const { stateGlobalIntinerary } = useContext(IntineraryContext);

  const intineraryValueArray = stateGlobalIntinerary.intineraryValue;

  console.log("intineraryValueArray", intineraryValueArray);

  return (
    <>
      <SectionIntineraryData loc="SectionIntineraryData">
        {intineraryValueArray.length === 0 ? (
          <InfoUser>
            You didn't choose any intinerary yet! Go to "I Want To Explore
            Offers" and select a destination that you like to know more about!
          </InfoUser>
        ) : null}
        {stateGlobalIntinerary &&
          intineraryValueArray?.map((element, index) => (
            <CityCard key={index} {...element} />
          ))}
      </SectionIntineraryData>
    </>
  );
}
export default Intinerary;
