import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Attributions from "../../Attributions/Attributions";
import { Loading } from "../../Contact/Contact.style";
import { ImgWrapperPlan } from "../CitiesRegions/CitiesRegions.style";
import GetOption from "../GetOption";
import { Option } from "../MainHome.style";
import {
  ButtonPlan,
  DataContainer,
  FiltersContainer,
  ImgContainer,
  MainContainer,
  PageContainer,
  SelectCity,
  SelectRegion,
  Text,
  TextContainer,
} from "./CitiesRegions.style";

function CitiesRegions() {
  const { country } = useParams();

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  console.log("country", country, "id", localData);
  const [clicked, setClicked] = useState(true);
  const [show, setShow] = useState(null);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const url = country ? `http://localhost:3001/${country}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  const compactData = data ? data[0] : null;

  const onOptionChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onOptionChangeRegion = (e) => {
    setRegion(e.target.value);
  };
  const changeCityRegion = (city) => {
    if (city === "city") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <PageContainer loc="PageContainer">
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
            <MainContainer loc="MainContainer">
              <Text loc="Text">Country: {compactData.name}</Text>
              <DataContainer loc="DataContainer">
                <ImgWrapperPlan loc="ImgWrapperPlan">
                  <ImgContainer loc="ImgContainer" src={compactData.image} />
                  {compactData.attributions && (
                    <Attributions attributions={compactData.attributions[0]} />
                  )}
                </ImgWrapperPlan>
                <TextContainer loc="TextContainer">
                  {compactData.description}
                </TextContainer>
              </DataContainer>
            </MainContainer>
            <DataContainer loc="DataContainer">
              <FiltersContainer
                loc="FiltersContainer"
                show={show}
                onClick={() => changeCityRegion("city")}
              >
                <SelectCity
                  loc="SelectCity"
                  onChange={onOptionChangeCity}
                  value={city}
                >
                  <Option loc="Option">Choose a city:</Option>
                  {data.map((e, index) => {
                    return e.city && <GetOption key={index} value={e.city} />;
                  })}
                </SelectCity>
                <ButtonPlan
                  loc="ButtonPlan"
                  to={`/my-travel1/${country}/${city}/${localData}`}
                >
                  Search
                </ButtonPlan>
              </FiltersContainer>
              <FiltersContainer
                loc="FiltersContainer"
                show={!show}
                onClick={() => changeCityRegion("region")}
              >
                <SelectRegion
                  loc="SelectRegion"
                  onChange={onOptionChangeRegion}
                  value={region}
                >
                  <Option loc="Option">Choose a region:</Option>
                  {data.map((e, index) => {
                    return (
                      e.region && <GetOption key={index} value={e.region} />
                    );
                  })}
                </SelectRegion>
                <ButtonPlan
                  loc="ButtonPlan"
                  to={`/my-travel2/${country}/${region}/${localData}`}
                >
                  Search
                </ButtonPlan>
              </FiltersContainer>
            </DataContainer>
          </>
        )}
      </PageContainer>
      {console.log(country, city, region)}
      {data && console.log(data)}
    </>
  );
}

export default CitiesRegions;
