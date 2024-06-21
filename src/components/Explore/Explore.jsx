import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { itineraryPlus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
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
  ButtonAccomodation,
} from "./Explore.style";

import useToast from "../../hooks/useToast";
import useLocalStorage from "../../hooks/useLocalStorage";

const Explore = () => {
  const navigate = useNavigate();

  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  console.log(
    "stateGlobalItinerary",
    stateGlobalItinerary,
    "dispatchItinerary",
    dispatchItinerary
  );

  const itineraryValueArray = stateGlobalItinerary.itineraryValue || [];
  console.log("itineraryValueArray", itineraryValueArray);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  const { country, city } = useParams();

  const [clicked, setClicked] = useState(true);

  const urlCity =
    country && city ? `http://localhost:3001/${country}?city=${city}` : null;

  const {
    data: dataCity,
    error: errorCity,
    loading: loadingCity,
  } = useFetchData(urlCity, clicked, setClicked);

  const urlDestination = city
    ? `http://localhost:3001/destinations?city=${city}`
    : null;

  const {
    data: dataDestination,
    error: errorDestination,
    loading: loadingDestination,
  } = useFetchData(urlDestination, clicked, setClicked);

  const compactDataCity = dataCity ? dataCity[0] : null;
  console.log("compactDataCity", compactDataCity);

  const [unique, setUnique] = useState(true);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const [onAdd, setOnAdd] = useState(false);

  const handleAddItinerary = (country, city, event) => {
    setOnAdd(true);
    console.log("HANDLE ADD ITINERARY");

    const addObject = { country, city };

    console.log("ADD OBJECT", addObject);

    const isDuplicate = itineraryValueArray.some(
      (element) =>
        element.country === addObject.country && element.city === addObject.city
    );

    if (isDuplicate) {
      console.log("cannot be added");
      setUnique(false);
      setShowA(true);
      event.preventDefault();
    } else {
      console.log("can be added");
      setUnique(true);
      dispatchItinerary(itineraryPlus({ country, city }));
    }
  };

  const goAccomm = () => {
    console.log("GO ACCOMM");
    console.log("Navigating to: ", `/accommodation/${localData}`);
    console.log("State: ", { dataCity });
    navigate(`/accommodation/${localData}`, {
      state: { dataCity },
    });
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
            Error: {errorCity.message} Our team is called from the coffee break
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
            Error: {errorCity.message} Our team is called from the coffee break
            and will take care of the problem!
          </Error>
        )}
        {dataDestination &&
          dataDestination?.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
      </SectionLandmarkData>
      {dataCity && (
        <SectionCityButtons loc="SectionCityButtons">
          {console.log("country", country)}
          <ButtonCity
            loc="ButtonCity"
            onClick={(event) => {
              handleAddItinerary(country, city, event);
            }}
          >
            Save {city} to my itinerary!
          </ButtonCity>
          <ButtonAccomodation
            loc="ButtonAccomodation"
            onClick={() => goAccomm()}
          >
            I want to book accommodation!
          </ButtonAccomodation>
        </SectionCityButtons>
      )}
      {!unique &&
        useToast(
          "Intinerary",
          `${city} is already in the Itinerary!`,
          "",
          showA,
          toggleShowA
        )}
      {unique &&
        onAdd &&
        useToast(
          "Intinerary",
          `Succes! ${city} was added to the Itinerary!`,
          "",
          showA,
          toggleShowA
        )}
    </>
  );
};

export default Explore;
