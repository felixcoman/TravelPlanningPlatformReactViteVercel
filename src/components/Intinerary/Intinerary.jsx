import useLocalStorage from "../../hooks/useLocalStorage";

function Intinerary({ country }) {
  console.log("COMMING SOON!");
  console.log("country", country);
  const { localData, isLocalDataEmpty } = useLocalStorage("city");
  // const existingData = !isLocalDataEmpty ? JSON.parse(localData) : [];

  console.log("tip date localData", typeof localData, localData);

  // useEffect(() => {
  //   console.log("localData", localData, "isLocalDataEmpty", isLocalDataEmpty);
  //   if (localData || isLocalDataEmpty)

  //   console.log("parsed localData", JSON.parse(localData));
  // }, [localData, isLocalDataEmpty]);

  // let localDataArray = [];
  // localData !== "string"
  //   ? (localDataArray = JSON.parse(localData))
  //   : localData === localData;

  // console.log("localDataArray", localDataArray);

  const localDataArray = JSON.parse(localData);
  return (
    <>
      {/* {!isLocalDataEmpty && typeof localData === "object" ? (
        <div>{localData}</div>
      ) : (
        !isLocalDataEmpty &&
        typeof localData === "array" &&
        localDataArray?.map((element, index) => (
          <div key={index}>
            {index}
            {element}
          </div>
        ))
      )} */}
      {!isLocalDataEmpty &&
        localDataArray?.map((element, index) => (
          <div key={index}>
            {index}
            {element}
          </div>
        ))}
      {!isLocalDataEmpty && console.log(localData)}
    </>
  );
}
export default Intinerary;
