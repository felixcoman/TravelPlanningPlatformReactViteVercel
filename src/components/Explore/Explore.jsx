import { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import {
  itineraryLandmarkPlus,
  itineraryPlus,
} from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import { useToast } from "../../global/toast/ToastContext";
import containsObject from "../../global/utilities/containsObject";
import transformToUppercase from "../../global/utilities/transformToUppercase";
import useAddData from "../../hooks/useAddData";
import useFetchData from "../../hooks/useFetchData";
import useLocalStorage from "../../hooks/useLocalStorage";
import Attributions from "../Attributions/Attributions";
import { AttributionsSection } from "../Attributions/Attributions.style";
import { Error, Loading } from "../Contact/Contact.style";
import DestinationCard from "../DestinationCard/DestinationCard";
import { ImgWrapper } from "../DestinationCard/DestinationCard.style";
import ToastComponent from "../Toast/ToastComponent";
import {
  ButtonAccommodationExplore,
  ButtonCity,
  CityDescription,
  ContainerDescriptionBottom,
  ContainerDescriptionTop,
  ContainerTop,
  ImageCity,
  MyStamp,
  SectionCityButtons,
  SectionCityData,
  SectionExplore,
  SectionLandmarkData,
  SectionLandmarkDataWrapper,
  Subtitle,
  Title,
} from "./Explore.style";

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
  const [addData, setAddData] = useState("");
  const [respData, setRespData] = useState("");
  const [disableUI, setDisableUI] = useState(false);
  const [nameDest, setNameDest] = useState("");

  const urlCity = country && city ? `/api/${country}?city=${city}` : null;

  const {
    data: dataCity,
    error: errorCity,
    loading: loadingCity,
  } = useFetchData(urlCity, clicked, setClicked);

  const urlDestination = city ? `/api/destinations?city=${city}` : null;

  const {
    data: dataDestination,
    error: errorDestination,
    loading: loadingDestination,
  } = useFetchData(urlDestination, clicked, setClicked);

  const compactDataCity = dataCity ? dataCity[0] : null;
  console.log("compactDataCity", compactDataCity);

  let accommodationArray = [];
  let transCountry = transformToUppercase(country);

  const { showToast } = useToast();

  const { error1, error2, loading1, loading2 } = useAddData(
    localData,
    addData,
    respData,
    setRespData,
    setNameDest
  );

  console.log("loading1", loading1);

  useEffect(() => {
    console.log(
      "addData",
      addData,
      "respData",
      respData,
      "error1",
      error1,
      "error2",
      error2,
      "loading1",
      loading1,
      "loading2",
      loading2
    );
    //send data to global store and show success message just if there is response data, loading stopped and no errors
    if (!loading2 && !error1 && !error2 && addData !== "" && respData !== "") {
      console.log("EXPLORE USE EFFECT");
      console.log("addData", addData);
      console.log("respData", respData);
      if (addData.hasOwnProperty("name")) {
        console.log("Landmark", nameDest);
        console.log(
          "country",
          country,
          "city",
          city,
          "transCountry",
          transCountry
        );

        dispatchItinerary(
          itineraryLandmarkPlus({ transCountry, city, nameDest })
        );
        showToast(
          "Itinerary",
          `Success! ${nameDest} was added to the Itinerary!`,
          "my-info-toast"
        );
        setAddData("");
        setRespData("");
        setDisableUI(false);
      } else {
        console.log("ITINERARY");
        console.log("country", country, "transCountry", transCountry);
        dispatchItinerary(itineraryPlus({ transCountry, city }));
        showToast(
          "Itinerary",
          `Success! ${city} was added to the Itinerary!`,
          "my-info-toast"
        );
        setAddData("");
        setRespData("");
        setDisableUI(false);
      }
    }
  }, [loading2, error1, error2, addData, respData]);

  // this function handles 2 cases and calls different separate functions depending on which case is true: if there is duplicate it notifies the user and prevents the onClick event; else it dispatches data to State Management, adds intinerary data to user on server and notifies user that data was added

  const handleAddItinerary = (transCountry, city, event) => {
    if (disableUI) return;
    console.log("HANDLE ADD ITINERARY CITY");

    const addObject = { country: transCountry, city };
    console.log("addObject", addObject);

    if (containsObject(itineraryValueArray, addObject)) {
      showToast(
        "Itinerary",
        `${city} is already in the Itinerary!`,
        "my-warning-toast"
      );
      console.log("cannot be added");
      event.preventDefault();
    } else {
      console.log("can be added");
      setAddData(addObject); // launches useAddData
      setDisableUI(true);
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
    if (!containsObject(accommodationArray, addObject)) {
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
    if (disableUI) return;
    console.log("GO ACCOMM");
    console.log("Navigating to: ", `/accommodation`);
    console.log("State: ", { accommodationArray });
    console.log("itineraryValueArray.length", itineraryValueArray.length);

    if (itineraryValueArray.length !== 0) {
      populateAccommondationArray(itineraryValueArray, accommodationArray);
      console.log("accommodationArray", accommodationArray);

      handleAddItinerary(transCountry, city, event);

      addObjectPair({ country: transCountry, city });
    } else {
      console.log("SUNT PE ELSE");
      handleAddItinerary(transCountry, city, event);

      accommodationArray.push({ transCountry, city });
    }

    console.log("accommodationArray", accommodationArray);
    navigate(`/accommodation`, {
      state: accommodationArray,
    });
  };

  return (
    <SectionExplore loc="SectionExplore">
      <SectionCityData loc="SectionCityData">
        {loadingCity && (
          <Loading loc="Loading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            Loading... Approaching cities...
          </Loading>
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
              <Title loc="Title">
                Feel free to explore our offers regarding your selection
              </Title>
              <ImgWrapper loc="ImgWrapper">
                <ImageCity loc="ImageCity" src={compactDataCity.image} />
                {compactDataCity.attributions && (
                  <Attributions
                    attributions={compactDataCity.attributions[0]}
                  />
                )}
              </ImgWrapper>
              <MyStamp loc="MyStamp">
                <a
                  className="stamp"
                  href="https://www.freeiconspng.com/img/24416"
                  title="Image from freeiconspng.com"
                >
                  <img
                    src="/src/assets/free-stamp-png-24416.png"
                    width="350"
                    alt="Mail Stamp Template png"
                  />
                </a>
                <ContainerDescriptionTop loc="ContainerDescriptionTop">
                  <Subtitle loc="CountrySubtitle">{transCountry}</Subtitle>
                  {compactDataCity.reg && (
                    <Subtitle loc="Subtitle">{compactDataCity.reg}</Subtitle>
                  )}
                  <Subtitle loc="Subtitle">{city}</Subtitle>
                </ContainerDescriptionTop>
              </MyStamp>
            </ContainerTop>
            <ContainerDescriptionBottom loc="ContainerDescriptionBottom">
              <CityDescription
                className="tangerine-regular"
                loc="CityDescription"
              >
                Description: {compactDataCity.description}
              </CityDescription>
            </ContainerDescriptionBottom>
            <AttributionsSection loc="AttributionsSection">
              Copyright:
              <br />
              Background vintage paper:
              <a href="https://www.freepik.com/free-vector/old-paper-background-with-stains_897940.htm#fromView=search&page=1&position=1&uuid=5324dae9-1f13-4763-a6da-3e59b6e6be57">
                {" "}
                Image by kjpargeter on Freepik
              </a>
              <br />
              Stamp:
              <a href="https://www.freeiconspng.com/img/24416">
                {" "}
                Mail Stamp Template png
              </a>
            </AttributionsSection>
          </>
        )}
      </SectionCityData>
      {disableUI && (
        <Loading loc="Loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          Saving your itinerary...
        </Loading>
      )}
      <SectionLandmarkDataWrapper
        loc="SectionLandmarkDataWrapper"
        disabled={disableUI}
      >
        <SectionLandmarkData loc="SectionLandmarkData">
          {loadingDestination && (
            <Loading loc="Loading">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              Loading... Looking for destinations...
            </Loading>
          )}
          {errorDestination && (
            <Error loc="Error">
              Error: {errorCity.message} Our team is called from the coffee
              break and will take care of the problem!
            </Error>
          )}
          {dataDestination &&
            dataDestination?.map((destination, index) => (
              <DestinationCard
                key={index}
                {...destination}
                showToast={showToast}
                setAddData={setAddData}
                disableUI={disableUI}
                setDisableUI={setDisableUI}
              />
            ))}
        </SectionLandmarkData>
      </SectionLandmarkDataWrapper>
      <ToastComponent />
      {dataCity && (
        <SectionCityButtons loc="SectionCityButtons">
          {console.log("country", country)}
          <ButtonCity
            loc="ButtonCity"
            onClick={(event) => {
              handleAddItinerary(transCountry, city, event);
            }}
            disabled={disableUI}
          >
            Save {city} to My Itinerary!
          </ButtonCity>
          <ButtonAccommodationExplore
            loc="ButtonAccommodationExplore"
            onClick={(event) => goAccomm(event)}
            disabled={disableUI}
          >
            I want to book accommodation!
          </ButtonAccommodationExplore>
        </SectionCityButtons>
      )}
    </SectionExplore>
  );
};

export default Explore;
