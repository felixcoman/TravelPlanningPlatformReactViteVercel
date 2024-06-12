import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import DestinationCard from "../DestinationCard/DestinationCard";
import { Error, Loading } from "../MainHome/MainHome.style";
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
  SectionLandmarkData,
  Subtitle,
  Title,
  InfoUser,
  ButtonInfo,
  InfoSection,
} from "./Explore.style";

import { useContext } from "react";
import { intineraryPlus } from "../../global/intinerary/actions";
import { IntineraryContext } from "../../global/intinerary/context";

const Explore = () => {
  const { stateGlobalIntinerary, dispatchIntinerary } =
    useContext(IntineraryContext);

  console.log(
    "stateGlobalIntinerary",
    stateGlobalIntinerary,
    "dispatchIntinerary",
    dispatchIntinerary
  );

  const intineraryValueArray = stateGlobalIntinerary.intineraryValue || [];

  console.log("intineraryValueArray", intineraryValueArray);

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
    loading: loadingDestination,
  } = useFetchData(urlDestination, clicked, setClicked);

  const compactDataCity = dataCity ? dataCity[0] : null;
  console.log("compactDataCity", compactDataCity);
  const [unique, setUnique] = useState(true);

  const handleAddIntinerary = (country, city, event) => {
    // console.log("intineraryValueArray", intineraryValueArray);
    console.log("HANDLE ADD INTINERARY");

    const addObject = { country, city };

    console.log("ADD OBJECT", addObject);

    const isDuplicate = intineraryValueArray.some(
      (element) =>
        element.country === addObject.country && element.city === addObject.city
    );

    if (isDuplicate) {
      console.log("cannot be added");
      setUnique(false);
      event.preventDefault();
    } else {
      console.log("can be added");
      setUnique(true);
      dispatchIntinerary(intineraryPlus({ country, city }));
    }
  };
  return (
    <>
      <SectionCityData loc="SectionCityData">
        <Title loc="Title">
          Feel free to explore our offers regarding your selection:
        </Title>
        {loadingCity && (
          <Loading loc="Loading">Loading... Waiting for landing...</Loading>
        )}
        {errorCity && (
          <Error loc="Error">
            Error: {errorCity.message} Our team is called from the coffe break
            and will take care of the problem!
          </Error>
        )}

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
        {loadingDestination && (
          <Loading loc="Loading">Loading... Waiting for landing...</Loading>
        )}
        {errorDestination && (
          <Error loc="Error">
            Error: {errorCity.message} Our team is called from the coffe break
            and will take care of the problem!
          </Error>
        )}
        {dataDestination &&
          dataDestination?.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
      </SectionLandmarkData>
      <SectionCityButtons loc="SectionCityButtons">
        {console.log("country", country)}
        <ButtonCity
          loc="ButtonCity"
          onClick={(event) => {
            handleAddIntinerary(country, city, event);
          }}
          to={`/intinerary`}
        >
          Save {city} to my intinerary!
        </ButtonCity>
        <ButtonCity loc="ButtonCity">I want to book accommodation!</ButtonCity>
      </SectionCityButtons>
      {!unique && (
        <InfoSection>
          <InfoUser>This item is already in the Intinerary!</InfoUser>
          <ButtonInfo to={`/home`}>Go back to Home screen</ButtonInfo>
        </InfoSection>
      )}
    </>
  );
};

export default Explore;
