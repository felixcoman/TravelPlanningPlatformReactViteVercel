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
  console.log("id", id);

  const location = useLocation();
  const [accommodationArray] = location.state || [];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);

  useEffect(() => {
    const fetchData = async (country, city) => {
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
        return { country, city, error: "Eroare 808" };
      }
    };

    const fetchAllData = async () => {
      const promises = accommodationArray.map((element) =>
        fetchData(element.countryArr, element.cityArr)
      );
      const results = await Promise.all(promises);
      setData(results);
      setLoading(false);
    };

    fetchAllData();
  }, [accommodationArray]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("data", data);
  const compactDataCity = data.length > 0 ? data[0].dataCity : null;
  console.log("compactDataCity", compactDataCity);
  if (!compactDataCity) {
    return <div>No data available</div>;
  }
  console.log("compactDataCity.buget", compactDataCity[0].buget);
  const budgetKeys = Object.keys(compactDataCity[0].buget);
  const searchTerm = "Buget";

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
      {data.map(
        (dataItem, index) =>
          dataItem.dataCity && (
            <div key={index}>
              <Sidebar loc="Sidebar">
                <ListGroup>
                  <LocationTitle loc="LocationTitle">
                    City: {dataItem.city}
                  </LocationTitle>
                  {transformedBudgetKeys.map((key, idx) => (
                    <ListGroup.Item key={idx}>
                      <ItemLink onClick={() => getKeyDisplay(key)}>
                        {key}
                      </ItemLink>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Sidebar>
              {selectedBudget && (
                <DisplayContainer loc="DisplayContainer">
                  {Object.entries(
                    dataItem.dataCity[0].buget[selectedBudget]
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
              )}
            </div>
          )
      )}
    </div>
  );
}

export default Accommodation;
