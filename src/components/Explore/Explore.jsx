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

import useToast from "../../global/useToast";
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

  let accommodationArray = [];

  const handleUpdateItinerary = (updateData) => {
    fetch(`http://localhost:3001/users/${localData}`)
      .then((response) => response.json())
      .then((userData) => {
        // Check if the user has a "itinerary" array, if not, initialize it
        const newData = userData.itinerarycity
          ? [...userData.itinerarycity, updateData]
          : [updateData];
        // Update the user data with the new itinerary
        const updatedUserData = { ...userData, itinerarycity: newData };

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

  const checkDuplicate = (arr, obj) =>
    arr.some(
      (element) => element.country === obj.country && element.city === obj.city
    );

  const handleAddItinerary = (country, city, event) => {
    setOnAdd(true);
    console.log("HANDLE ADD ITINERARY");

    const addObject = { country, city };

    console.log("ADD OBJECT", addObject);

    if (checkDuplicate(itineraryValueArray, addObject)) {
      console.log("cannot be added");
      setUnique(false);
      setShowA(true);
      event.preventDefault();
    } else {
      console.log("can be added");
      setUnique(true);
      dispatchItinerary(itineraryPlus({ country, city }));
      handleUpdateItinerary(addObject);
    }
  };

  const addObjectPair = (obj) => {
    const addObject = { country: obj.country, city: obj.city };
    console.log(
      "obj",
      obj,
      "addObject",
      addObject,
      "obj.country",
      obj.country,
      "obj.city",
      obj.city
    );
    if (!checkDuplicate(accommodationArray, addObject)) {
      console.log("UNIC addObject", addObject);
      console.log("accommodationArray", accommodationArray);
      accommodationArray.push(addObject);
    }
  };

  const populateAccommondationArray = (arr, accommodationArray) => {
    arr.forEach((key) => addObjectPair(key));
    return accommodationArray;
  };

  const goAccomm = (event) => {
    console.log("GO ACCOMM");
    console.log("Navigating to: ", `/accommodation/${localData}`);
    console.log("State: ", { accommodationArray });
    console.log("itineraryValueArray.length", itineraryValueArray.length);

    if (itineraryValueArray.length !== 0) {
      populateAccommondationArray(itineraryValueArray, accommodationArray);
      console.log("accommodationArray", accommodationArray);

      handleAddItinerary(country, city, event);

      addObjectPair({ country, city });
    } else {
      console.log("SUNT PE ELSE");
      handleAddItinerary(country, city, event);

      accommodationArray.push({ country, city });
    }

    console.log("accommodationArray", accommodationArray);
    navigate(`/accommodation/${localData}`, {
      state: accommodationArray,
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
              <a
                className="stamp"
                href="https://www.freeiconspng.com/img/24416"
                title="Image from freeiconspng.com"
              >
                <img
                  src="https://www.freeiconspng.com/uploads/mail-stamp-template-png-33.png"
                  width="350"
                  alt="Mail Stamp Template png"
                />
              </a>
              <ContainerDescriptionTop loc="ContainerDescriptionTop">
                <CountrySubtitle loc="CountrySubtitle">
                  Country: {country}
                </CountrySubtitle>
                {compactDataCity.reg && (
                  <Subtitle loc="Subtitle">
                    Region: {compactDataCity.reg}
                  </Subtitle>
                )}
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
            onClick={(event) => goAccomm(event)}
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
