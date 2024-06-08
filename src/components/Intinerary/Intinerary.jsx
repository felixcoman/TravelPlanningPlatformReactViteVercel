// import useLocalStorage from "../../hooks/useLocalStorage";
import { useContext } from "react";
import { IntineraryContext } from "../../global/context";

// function Intinerary({ country }) {
//   console.log("country", country);

function Intinerary() {
  const { stateGlobalIntinerary } = useContext(IntineraryContext);
  console.log("stateGlobalIntinerary", stateGlobalIntinerary);

  //AFISARE LOCAL STORAGE
  // const { localData, isLocalDataEmpty } = useLocalStorage("city");

  // console.log("tip date localData", typeof localData, localData);

  // const localDataArray = JSON.parse(localData);
  //AFISARE LOCAL STORAGE SUS

  return (
    <>
      {/*AFISARE LOCAL STORAGE*/}
      {/* {!isLocalDataEmpty &&
        localDataArray?.map((element, index) => (
          <div key={index}>
            {index}
            {element}
          </div>
        ))}
      {!isLocalDataEmpty && console.log(localData)} */}
    </>
  );
}
export default Intinerary;
