import { useContext, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { addChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import transformToUppercase from "../../global/utilities/transformToUppercase";
import useFetchData from "../../hooks/useFetchData";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLocalStorage from "../../hooks/useLocalStorage";
import Attributions from "../Attributions/Attributions";
import { Loading } from "../Contact/Contact.style";
import {
  DataContainer,
  ImgWrapperPlan,
  Text,
} from "../MainHome/CitiesRegions/CitiesRegions.style";
import GetOption from "../MainHome/GetOption";
import { Option } from "../MainHome/MainHome.style";
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

function MyTravelCity() {
  let { country, city } = useParams();
  country = transformToUppercase(country);

  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [budget, setBudget] = useState("");
  const [show, setShow] = useState(false);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);
  console.log("country", country);
  console.log("city", city);

  const url = country ? `http://localhost:3001/${country}/?city=${city}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  const compactData = data ? data[0] : null;

  const optionPeriod = ["three days", "five days", "seven days"];
  const optionBudget = ["low budget", "medium budget", "high budget"];

  const onOptionChangePeriod = (e) => {
    setPeriod(e.target.value);
    setShow(false);
  };

  const onOptionChangeBudget = (e) => {
    setBudget(e.target.value);
    setShow(false);
  };

  const handleClick = () => {
    setPeriod(period);
    setBudget(budget);
    setShow(!show);
  };

  const id = localData;
  const { users: user } = useFetchUsers(id, clicked, setClicked);

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

  const handleAdd = (country, city, budget, period, data) => {
    const updateDataChoice = { country, city, budget, period, data };

    dispatchChoice(addChoice(updateDataChoice));
    console.log("updateDataChoice", updateDataChoice);
    handleUpdateChoice(updateDataChoice);
  };

  return (
    <>
      <PageContainerTravel loc="PageContainerTravel">
        {loading && (
          <Loading loc="Loading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            Loading... Waiting for landing...
          </Loading>
        )}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <>
            <MainContainerTravel loc="MainContainerTravel">
              <Text loc="Text">City: {compactData.city}</Text>
              <DataContainer loc="DataContainer">
                <ImgWrapperPlan loc="ImgWrapperPlan">
                  <ImgContainerTravel
                    loc="ImgContainerTravel"
                    src={compactData.image}
                  />
                  {compactData.attributions && (
                    <Attributions attributions={compactData.attributions[0]} />
                  )}
                </ImgWrapperPlan>
                <TextContainerTravel loc="TextContainerTravel">
                  {compactData.description}
                </TextContainerTravel>
              </DataContainer>
            </MainContainerTravel>

            {data[0].budget && data[0].period && (
              <FiltersContainerTravel loc="FiltersContainerTravel">
                <FiltersTravel loc="FiltersTravel">
                  <SelectTravel
                    loc="SelectTravel"
                    onChange={onOptionChangePeriod}
                  >
                    <Option loc="Option" value="">
                      Choose a period:
                    </Option>
                    {optionPeriod.map((element, index) => {
                      return <GetOption key={index} value={element} />;
                    })}
                  </SelectTravel>

                  <SelectTravel
                    loc="SelectTravel"
                    onChange={onOptionChangeBudget}
                  >
                    <Option loc="Option" value="">
                      Choose a budget:
                    </Option>
                    {optionBudget.map((element, index) => {
                      return <GetOption key={index} value={element} />;
                    })}
                  </SelectTravel>
                </FiltersTravel>

                <FiltersTravel loc="FiltersTravel">
                  <ButtonPlanTravel
                    loc="ButtonPlanTravel"
                    onClick={handleClick}
                  >
                    Search
                  </ButtonPlanTravel>
                </FiltersTravel>
                {show ? (
                  <MyTravelRecommend
                    budgetTravel={budget}
                    periodTravel={period}
                    data={data}
                  />
                ) : null}
              </FiltersContainerTravel>
            )}
          </>
        )}
        {data && (!data[0].budget || !data[0].period) && (
          <div>No data available for your selection!</div>
        )}
        {show ? (
          <ButtonChoice
            loc="ButtonChoice"
            to={`/my-choices`}
            onClick={() => {
              handleAdd(country, city, budget, period, data);
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
