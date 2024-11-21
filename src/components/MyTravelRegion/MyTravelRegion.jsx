import { useContext, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useParams } from "react-router-dom";
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
import {
  ButtonChoice,
  ButtonPlanTravel,
  FilterDivision,
  FiltersContainerTravel,
  FiltersTravel,
  ImgContainerTravel,
  MainContainerTravel,
  PageContainerTravel,
  SelectTravel,
  TextContainerFilter,
  TextContainerTravel,
} from "../MyTravelCity/MyTravel.style";
import MyTravelRecommend from "../MyTravelRecommend/MyTravelRecommend";
import useAddData from "../../hooks/useAddData";
import containsObject from "../../global/utilities/containsObject";
import ToastComponent from "../Toast/ToastComponent";

function MyTravelRegion() {
  const navigate = useNavigate();

  let { country, region } = useParams();
  country = transformToUppercase(country);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [budget, setBudget] = useState("");
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastText, setToastText] = useState("");
  const [toastClass, setToastClass] = useState("");
  const [addData, setAddData] = useState("");

  const url = country
    ? `http://localhost:3001/${country}/?region=${region}`
    : null;

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
    if (period !== "" || budget !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const id = localData;
  const { users: user } = useFetchUsers(id, clicked, setClicked);

  console.log("user", user);

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);
  console.log("stateGlobalChoice.choiceValue", stateGlobalChoice.choiceValue);

  const { error: errorAdd, loading: loadingAdd } = useAddData(
    localData,
    addData,
    setAddData,
    "choices"
  );
  console.log("error add HOOK", errorAdd, "loading add HOOK", loadingAdd);

  const notify = (isSuccess, nameValue, classValue) => {
    if (isSuccess) {
      setToastTitle("My Choices");
      setToastText(
        `Success! ${country}, ${region} with ${
          budget !== "" ? budget : "no budget selected"
        } and ${
          period !== "" ? period : "no period selected"
        } was added to My Choices!`
      );
      setToastClass(classValue);
    } else {
      setToastTitle("My Choices");
      setToastText(
        `${country}, ${region} with ${
          budget !== "" ? budget : "no budget selected"
        } and ${
          period !== "" ? period : "no period selected"
        } is already in My Choices!`
      );
      setToastClass(classValue);
    }
    setShowA(true);
  };

  const handleAdd = (country, region, budget, period, data, event) => {
    const updateDataChoice = { country, region, budget, period, data };

    if (containsObject(stateGlobalChoice.choiceValue, updateDataChoice)) {
      notify(false, "", "my-warning-toast");
      console.log("cannot be added");
      event.preventDefault();
    } else {
      notify(true, "", "my-info-toast");
      dispatchChoice(addChoice(updateDataChoice));
      console.log("updateDataChoice", updateDataChoice);
      setAddData(updateDataChoice);
      navigate(`/my-choices`);
    }
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
              <Text loc="Text">Region: {compactData.region}</Text>
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
                  <FilterDivision>
                    <TextContainerFilter>Filter by period:</TextContainerFilter>
                    <SelectTravel
                      loc="SelectTravel"
                      onChange={onOptionChangePeriod}
                    >
                      <Option loc="Option" value="">
                        empty selection
                      </Option>
                      {optionPeriod.map((element, index) => {
                        return <GetOption key={index} value={element} />;
                      })}
                    </SelectTravel>
                  </FilterDivision>
                  <FilterDivision>
                    <TextContainerFilter>Filter by budget:</TextContainerFilter>
                    <SelectTravel
                      loc="SelectTravel"
                      onChange={onOptionChangeBudget}
                    >
                      <Option loc="Option" value="">
                        empty selection
                      </Option>
                      {optionBudget.map((element, index) => {
                        return <GetOption key={index} value={element} />;
                      })}
                    </SelectTravel>
                  </FilterDivision>
                </FiltersTravel>

                <FiltersTravel loc="FiltersTravel">
                  <ButtonPlanTravel
                    loc="ButtonPlanTravel"
                    onClick={() => handleClick()}
                  >
                    Search
                  </ButtonPlanTravel>
                </FiltersTravel>

                {show && (
                  <MyTravelRecommend
                    budgetTravel={budget}
                    periodTravel={period}
                    data={data}
                  />
                )}
              </FiltersContainerTravel>
            )}
          </>
        )}
        {data && (!data[0].budget || !data[0].period) && (
          <div>No data available for your selection!</div>
        )}

        {show && (
          <ButtonChoice
            loc="ButtonChoice"
            onClick={(event) =>
              handleAdd(country, region, budget, period, data, event)
            }
          >
            Save my Choice
          </ButtonChoice>
        )}
        <ToastComponent
          toastTitle={toastTitle}
          toastText={toastText}
          className={toastClass}
          show={showA}
          toggleShow={() => setShowA(false)}
        />
      </PageContainerTravel>
    </>
  );
}

export default MyTravelRegion;
