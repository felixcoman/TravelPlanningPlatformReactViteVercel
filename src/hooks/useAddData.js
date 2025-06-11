import { useEffect, useState } from "react";

const useAddData = (localData, addData, respData, setRespData, setNameDest) => {
  console.log("addData", addData);

  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  let arrayName = "";

  console.log(
    "error1",
    error1,
    "error2",
    error2,
    "loading1",
    loading1,
    "loading2",
    loading2
  );
  console.log("inside add data function");

  useEffect(() => {
    console.log("inside add data useEffect");

    if (localData === null) {
      console.log("No user!");
      return;
    }

    if (Object.keys(addData).length === 0) {
      console.log("No data!");
      return;
    }

    console.log("Proprietate", addData.hasOwnProperty("name"));

    if (addData.hasOwnProperty("name")) {
      arrayName = "itinerarylandmark";
      setNameDest(addData.name);
    } else arrayName = "itinerarycity";

    setError1(false);
    setError2(false);

    const handleUpdateServer = async () => {
      console.log("inside add data async");
      setLoading1(true);

      await fetch(`/api/users?id=${localData}`)
        .then((response) => response.json())
        .then((userData) => {
          // Check if the user has a travel options array, if not, initialize it
          const newData = userData[arrayName]
            ? [...userData[arrayName], addData]
            : [addData];

          console.log("newData", newData, "userData", userData);
          setLoading2(true);

          // Send the updated data back to the server - new travel options
          fetch(`/api/users?id=${localData}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...userData, [arrayName]: newData }),
          })
            .then((response) => response.json())
            .then((json) => {
              console.log("json update server, respData", json);
              setRespData(json);
            })
            .catch((error2) => {
              setError1(error2);
              console.error("Error 2 updating user data:", error2);
            })
            .finally(() => setLoading2(false));
        })
        .catch((error1) => {
          setError1(error1);
          console.error("Error 1 fetching user data:", error1);
        })
        .finally(() => setLoading1(false));
    };

    handleUpdateServer();
  }, [addData]);
  return { respData, error1, error2, loading1, loading2 };
};
export default useAddData;
