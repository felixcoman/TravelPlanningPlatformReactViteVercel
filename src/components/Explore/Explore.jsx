import { useEffect, useState } from "react";

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
} from "./Explore.style";
import useLocalStorage from "../../hooks/useLocalStorage";

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
    loading: loadingDestination,
  } = useFetchData(urlDestination, clicked, setClicked);

  const compactDataCity = dataCity ? dataCity[0] : null;

  console.log("compactDataCity", compactDataCity);

  const { localData, handleLocalData, isLocalDataEmpty } =
    useLocalStorage("city");
  console.log("localData", localData);

  const addLocalStorage = (value) => {
    console.log("value", value);
    // console.log("isLocalDataEmpty", isLocalDataEmpty);

    // const existingData = !isLocalDataEmpty ? JSON.parse(localData) : [];
    const existingData = !isLocalDataEmpty ? localData : [];
    // uniqueLocalStorage(JSON.stringify(existingData));
    console.log("existingData", JSON.stringify(existingData));
    onsole.log("existingData", existingData);
    // console.log(
    //   "unic existingData",
    //   uniqueLocalStorage(JSON.stringify(existingData))
    // );
    const newData = [...existingData, value];
    // handleLocalData("city", JSON.stringify(newData));
    handleLocalData("city", newData);
  };

  // const uniqueLocalStorage = (arr) => {
  //   const uniqueArr = [arr[0]];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i - 1] !== arr[i]) {
  //       uniqueArr.push(arr[i]);
  //     }
  //   }
  //   return uniqueArr;
  // };

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
        <ButtonCity
          loc="ButtonCity"
          onClick={() => {
            addLocalStorage(city);
          }}
          to={`/intinerary`}
        >
          Save {city} to my intinerary!
        </ButtonCity>
        <ButtonCity loc="ButtonCity">I want to book accommodation!</ButtonCity>
      </SectionCityButtons>
    </>
  );
};

export default Explore;
