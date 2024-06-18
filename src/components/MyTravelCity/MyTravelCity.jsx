import { useContext, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { addChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import useFetchData from "../../hooks/useFetchData";
import useFetchUsers from "../../hooks/useFetchUsers";
import {
  DataContainer,
  Text,
} from "../MainHome/CitiesRegions/CitiesRegions.style";
import MyTravelRecommend from "../MyTravelRecommend/MyTravelRecommend";
import {
  ButtonChoice,
  ButtonPlanTravel,
  FiltersContainerTravel,
  FiltersTravel,
  ImgContainerTravel,
  MainContainerTravel,
  PageContainerTravel,
  SelectTravel,
  TextContainerTravel,
} from "./MyTravel.style";
import useLocalStorage from "../../hooks/useLocalStorage";

function MyTravelCity() {
  const { country, city } = useParams();
  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [buget, setBuget] = useState("");
  const [show, setShow] = useState(false);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  const url = country ? `http://localhost:3001/${country}/?city=${city}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  const compactData = data ? data[0] : null;

  const optionPeriod = ["three days", "five days", "seven days"];
  const optionBuget = ["Low buget", "Medium buget", "High buget"];

  const onOptionChangePeriod = (e) => {
    setPeriod(e.target.value);
    setClicked(true);
  };

  const onOptionChangeBuget = (e) => {
    setBuget(e.target.value);
    setClicked(true);
  };

  const handleClick = () => {
    setPeriod(period);
    setBuget(buget);
    setShow(!show);
  };
  const { users: user } = useFetchUsers("/" + localData);
  console.log("user", user);

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);
  console.log("stateGlobalChoice.choiceValue", stateGlobalChoice.choiceValue);

  const handleUpdateChoice = (updateDataChoice) => {
    console.log("stateGlobalChoice.choiceValue", stateGlobalChoice.choiceValue);
    console.log("stateGlobalChoice", stateGlobalChoice);
    console.log("updateDataChoice", updateDataChoice);
    fetch(`http://localhost:3001/users/${localData}`)
      .then((response) => response.json())
      .then((userData) => {
        // Check if the user has a 'choices' array, if not, initialize it
        const updatedChoices = userData.choices
          ? [...userData.choices, updateDataChoice]
          : [updateDataChoice];
        // Update the user data with the new choice
        const updatedUserData = { ...userData, choices: updatedChoices };

        fetch(`http://localhost:3001/users/${localData}`, {
          method: "PUT",
          body: JSON.stringify(updatedUserData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const handleAdd = (country, city, buget, period, data) => {
    const updateDataChoice = { country, city, buget, period, data };

    dispatchChoice(addChoice(updateDataChoice));
    console.log("updateDataChoice", updateDataChoice);
    handleUpdateChoice(updateDataChoice);
  };

  // FOR LOCAL STORAGE
  //   const existingData = !isLocalDataEmpty ? localData : [];
  //   const updatedData = [...existingData, ...globalLocalStorage];
  //   handleLocalData("choices", updatedData);
  // FOR LOCAL STORAGE
  // };

  return (
    <>
      <PageContainerTravel loc="PageContainerTravel">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <>
            <MainContainerTravel loc="MainContainerTravel">
              <Text loc="Text">City: {compactData.city}</Text>
              <DataContainer loc="DataContainer">
                <ImgContainerTravel
                  loc="ImgContainerTravel"
                  src={compactData.image}
                />
                <TextContainerTravel loc="TextContainerTravel">
                  {compactData.description}
                </TextContainerTravel>
              </DataContainer>
            </MainContainerTravel>

            <FiltersContainerTravel loc="FiltersContainerTravel">
              <FiltersTravel loc="FiltersTravel">
                <SelectTravel
                  loc="SelectTravel"
                  onChange={onOptionChangePeriod}
                >
                  <option>Choose a period:</option>
                  {optionPeriod.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </SelectTravel>

                <SelectTravel loc="SelectTravel" onChange={onOptionChangeBuget}>
                  <option>Choose a buget:</option>
                  {optionBuget.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </SelectTravel>
              </FiltersTravel>

              <FiltersTravel loc="FiltersTravel">
                <ButtonPlanTravel loc="ButtonPlanTravel" onClick={handleClick}>
                  {show ? "Return" : "Search"}
                </ButtonPlanTravel>
              </FiltersTravel>
              {show ? (
                <MyTravelRecommend
                  bugetTravel={buget}
                  periodTravel={period}
                  data={data}
                />
              ) : null}
            </FiltersContainerTravel>
          </>
        )}
        {show ? (
          <ButtonChoice
            loc="ButtonChoice"
            to={`/my-choices/${localData}`}
            onClick={() => {
              handleAdd(country, city, buget, period, data);
            }}
          >
            Save my Choice
          </ButtonChoice>
        ) : null}
      </PageContainerTravel>
    </>
  );
}

export default MyTravelCity;
