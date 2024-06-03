import { useState } from "react";

import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import DestinationCard from "../DestinationCard/DestinationCard";
import {
  ButtonCity,
  CityDescription,
  ContainerDescriptionBottom,
  ContainerDescriptionTop,
  ContainerTop,
  CountrySubtitle,
  ImageCity,
  SectionCityButtons,
  SectionCityData,
  Subtitle,
  Title,
  SectionLandmarkData,
} from "./Explore.style";

const Explore = () => {
  const { country, city } = useParams();

  const [clicked, setClicked] = useState(true);

  const urlCity =
    country && city ? `http://localhost:3001/${country}?city=${city}` : null;

  const {
    data: dataCity,
    error: errorCity,
    loading: loadingCity,
  } = useFetchData(urlCity, clicked, setClicked);

  const urlDestination =
    country && city ? `http://localhost:3001/destinations?city=${city}` : null;

  const {
    data: dataDestination,
    error: errorDestination,
    loading: loadingDestionation,
  } = useFetchData(urlDestination, clicked, setClicked);

  const compactDataCity = dataCity ? dataCity[0] : null;

  console.log("compactDataCity", compactDataCity);

  return (
    <>
      <SectionCityData loc="SectionCityData">
        <Title loc="Title">
          Feel free to explore our offers regarding your selection:
        </Title>
        {loadingCity && <div>Loading...</div>}
        {errorCity && <div>Error: {errorCity.message}</div>}
        {dataCity && (
          <>
            <ContainerTop loc="ContainerTop">
              <ImageCity loc="ImageCity" src={compactDataCity.image} />
              <ContainerDescriptionTop loc="ContainerDescriptionTop">
                <CountrySubtitle loc="CountrySubtitle">
                  Country: {country}
                </CountrySubtitle>
                <Subtitle loc="Subtitle">
                  Region: {compactDataCity.reg}
                </Subtitle>
                <Subtitle loc="Subtitle">City: {city}</Subtitle>
              </ContainerDescriptionTop>
            </ContainerTop>
            <ContainerDescriptionBottom loc="ContainerDescriptionBottom">
              <CityDescription loc="CityDescription">
                Description: {compactDataCity.description}
              </CityDescription>
            </ContainerDescriptionBottom>
          </>
        )}
      </SectionCityData>
      <SectionLandmarkData loc="SectionLandmarkData">
        {loadingDestionation && <div>Loading...</div>}
        {errorDestination && <div>Error: {errorCity.message}</div>}
        {dataDestination &&
          dataDestination?.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
      </SectionLandmarkData>
      <SectionCityButtons loc="SectionCityButtons">
        <ButtonCity loc="ButtonCity" to={`/intinerary`}>
          Save {city} to my intinerary!
        </ButtonCity>
        <ButtonCity loc="ButtonCity">I want to book accommodation!</ButtonCity>
      </SectionCityButtons>
    </>
  );
};

export default Explore;
