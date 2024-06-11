import { useContext } from "react";
import { IntineraryContext } from "../../global/intinerary/context";
import CityCard from "../CityCard/CityCard";
import { SectionIntineraryData } from "./Intinerary.style";

function Intinerary() {
  const { stateGlobalIntinerary } = useContext(IntineraryContext);

  const intineraryValueArray = stateGlobalIntinerary.intineraryValue;

  console.log("intineraryValueArray", intineraryValueArray);

  return (
    <>
      <SectionIntineraryData loc="SectionIntineraryData">
        {stateGlobalIntinerary &&
          intineraryValueArray?.map((element, index) => (
            <CityCard key={index} {...element} />
          ))}
      </SectionIntineraryData>
    </>
  );
}
export default Intinerary;
