import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import MyTravelRecommend from "../MyTravelRecommend/MyTravelRecommend";
import {
  Text,
  DataContainer,
} from "../MainHome/CitiesRegions/CitiesRegions.style";
import {
  PageContainerTravel,
  MainContainerTravel,
  FiltersContainerTravel,
  SelectTravel,
  ButtonPlanTravel,
  TextContainerTravel,
  ImgContainerTravel,
  FiltersTravel,
  ButtonChoice,
} from "./MyTravel.style";
import { ChoiceContext } from "../../global/choice/context";
import { useContext } from "react";
import { addChoice } from "../../global/choice/actions";
import Spinner from "react-bootstrap/Spinner";

function MyTravelCity() {
  const { country, city } = useParams();
  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [buget, setBuget] = useState("");
  const [show, setShow] = useState(false);

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

  const { dispatchChoice } = useContext(ChoiceContext);
  const handleAdd = (country, city, buget, period, data) => {
    dispatchChoice(addChoice({ country, city, buget, period, data }));
  };

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
            to={`/my-choices`}
            onClick={() => handleAdd(country, city, buget, period, data)}
          >
            Save my Choice
          </ButtonChoice>
        ) : null}
      </PageContainerTravel>
    </>
  );
}

export default MyTravelCity;
