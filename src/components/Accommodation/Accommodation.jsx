import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import {
  DisplayContainer,
  ItemLink,
  LocationTitle,
  Sidebar,
} from "./Accommodation.style";
import useFetchData from "../../hooks/useFetchData";

function Accommodation() {
  const { id } = useParams();
  const location = useLocation();
  // const { dataCity} = location.state || {};
  const [accommodationArray] = location.state || [];

  ///TO BE CONTINUED

  const [clicked, setClicked] = useState(true);

  const urlCity =
    country && city ? `http://localhost:3001/${country}?city=${city}` : null;

  const {
    data: dataCity,
    error: errorCity,
    loading: loadingCity,
  } = useFetchData(urlCity, clicked, setClicked);

  console.log("dataCity", dataCity);

  const [selectedBudget, setSelectedBudget] = useState(null);

  console.log("id", id);
  console.log("dataCity", dataCity);
  // console.log("dataDestination", dataDestination);

  const compactDataCity = dataCity ? dataCity[0] : null;
  console.log("compactDataCity", compactDataCity);
  if (!compactDataCity) {
    return <div>Loading...</div>;
  }

  console.log("compactDataCity.buget", compactDataCity.buget);
  const budgetKeys = Object.keys(compactDataCity.buget);
  console.log("budgetKeys", budgetKeys);
  const searchTerm = "Buget";

  const indexOfFirst = (arr, term) => {
    return arr.indexOf(term);
  };

  const transformedBudgetKeys = budgetKeys.map((key) => {
    const slicePosition = key.length - indexOfFirst(key, searchTerm);
    console.log("slicePosition", slicePosition);
    return (
      key.slice(0, -slicePosition) +
      " " +
      key.slice(-slicePosition).toLowerCase()
    );
  });

  console.log("transformedBudgetKeys", transformedBudgetKeys);

  const getKeyDisplay = (key) => {
    const originalKey = budgetKeys[transformedBudgetKeys.indexOf(key)];
    setSelectedBudget(originalKey);
  };

  const getHotelDescription = (description) => {
    const descriptionSlicePos =
      description[1].length - indexOfFirst(description[1], "web:");

    const hotelNameSlice = description[1].slice(0, -descriptionSlicePos - 2);

    const hotelWebSlice = description[1].slice(-descriptionSlicePos + 5);

    return [`${hotelNameSlice}\nwebpage:\xa0${hotelWebSlice}`];
  };

  const getIframe = (description) => {
    const descriptionSlicePos =
      description[1].length - indexOfFirst(description[1], "web:");

    const hotelWebSlice = description[1].slice(-descriptionSlicePos + 5);

    return hotelWebSlice;
  };

  return (
    <div>
      <h1>Accommodation</h1>
      {dataCity && (
        <>
          <Sidebar loc="Sidebar">
            <ListGroup>
              <LocationTitle loc="LocationTitle">
                City: {compactDataCity.city}
              </LocationTitle>
              {transformedBudgetKeys.map((key, index) => (
                <ListGroup.Item key={index}>
                  <ItemLink onClick={() => getKeyDisplay(key)}>{key}</ItemLink>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Sidebar>
        </>
      )}
      {dataCity && selectedBudget && (
        <DisplayContainer loc="DisplayContainer">
          {Object.entries(compactDataCity.buget[selectedBudget]).map(
            (description, index) => (
              <>
                <div key={index}>
                  <strong>Option {index + 1}</strong>:{" "}
                  {getHotelDescription(description)}
                </div>
                <iframe
                  src={getIframe(description)}
                  height="300px"
                  width="100%"
                  title="accommodation for your selection"
                ></iframe>
              </>
            )
          )}
        </DisplayContainer>
      )}
    </div>
  );
}

export default Accommodation;
