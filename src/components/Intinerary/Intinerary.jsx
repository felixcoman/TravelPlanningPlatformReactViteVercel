import { useContext, useState } from "react";
import { IntineraryContext } from "../../global/context";
import useFetchData from "../../hooks/useFetchData";
import CityCard from "../CityCard/CityCard";
import { SectionIntineraryData } from "./Intinerary.style";

function Intinerary() {
  const { stateGlobalIntinerary } = useContext(IntineraryContext);

  const intineraryValueArray = stateGlobalIntinerary.intineraryValue;

  console.log("intineraryValueArray", intineraryValueArray);

  const [clicked, setClicked] = useState(true);

  let url = null;

  const createFetchUrl = (arr) => {
    arr.map((locPair) => {
      console.log("locPair", locPair);
      if (locPair.country && locPair.city) {
        url = `http://localhost:3001/${locPair.country}?city=${locPair.city}`;
        console.log("url", url);
      } else null;
    });
  };

  createFetchUrl(intineraryValueArray);

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  console.log("data", "error", "loading", data, error, loading);

  return (
    <>
      <SectionIntineraryData loc="SectionIntineraryData">
        {data &&
          data?.map((destination, index) => (
            <CityCard key={index} {...destination} />
          ))}
      </SectionIntineraryData>
    </>
  );
}
export default Intinerary;
