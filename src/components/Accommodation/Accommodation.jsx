import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import {
  DisplayContainer,
  ItemLink,
  LocationTitle,
  Sidebar,
} from "./Accommodation.style";

function Accommodation() {
  const { id } = useParams();
  const location = useLocation();
  const accommodationArray = location.state || [];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const fetchData = async (country, city) => {
      if (country !== undefined && city !== undefined) {
        try {
          const response = await fetch(
            `http://localhost:3001/${country}?city=${city}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const dataCity = await response.json();
          return { country, city, dataCity };
        } catch (error) {
          return { country, city, error: "Error 808" };
        }
      } else return;
    };

    const fetchAllData = async () => {
      try {
        const promises = accommodationArray.map((element) =>
          fetchData(element.country, element.city)
        );
        const results = await Promise.all(promises);
        setData(results);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [accommodationArray]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0 || !data[0].dataCity) {
    return <div>No data available</div>;
  }

  const compactDataCity = data[0].dataCity;
  const budgetKeys = Object.keys(compactDataCity[0].budget);
  const searchTerm = "Budget";

  const indexOfFirst = (arr, term) => {
    return arr.indexOf(term);
  };

  const transformedBudgetKeys = budgetKeys.map((key) => {
    const slicePosition = key.length - indexOfFirst(key, searchTerm);
    return (
      key.slice(0, -slicePosition) +
      " " +
      key.slice(-slicePosition).toLowerCase()
    );
  });

  const getKeyDisplay = (key, city) => {
    console.log("GET");
    const originalKey = budgetKeys[transformedBudgetKeys.indexOf(key)];
    setSelectedBudget(originalKey);
    setSelectedCity(city);
    console.log("city", city);
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
    <>
      <h1>Accommodation</h1>
      {data && (
        <Sidebar loc="Sidebar">
          {data.map(
            (dataItem, index) =>
              dataItem.dataCity && (
                <ListGroup key={index}>
                  <LocationTitle loc="LocationTitle">
                    City: {dataItem.city}
                  </LocationTitle>
                  {transformedBudgetKeys.map((key, idx) => (
                    <ListGroup.Item key={idx}>
                      <ItemLink
                        onClick={() => getKeyDisplay(key, dataItem.city)}
                      >
                        {key}
                      </ItemLink>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )
          )}
        </Sidebar>
      )}
      {selectedBudget &&
        selectedCity &&
        data.map((dataItem, index) => {
          if (selectedCity === dataItem.city && dataItem.dataCity) {
            return (
              <DisplayContainer loc="DisplayContainer" key={index}>
                {Object.entries(
                  dataItem.dataCity[0].budget[selectedBudget]
                ).map((description, idx) => (
                  <div key={idx}>
                    <strong>Option {idx + 1}</strong>:{" "}
                    {getHotelDescription(description)}
                    <iframe
                      src={getIframe(description)}
                      height="300px"
                      width="100%"
                      title="accommodation for your selection"
                    ></iframe>
                  </div>
                ))}
              </DisplayContainer>
            );
          }
          return null;
        })}
    </>
  );
}

export default Accommodation;
