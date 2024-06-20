import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import {
  DisplayContainer,
  LocationTitle,
  Sidebar,
} from "./Accommodation.style";

function Accommodation() {
  const { id } = useParams();
  const location = useLocation();
  const { dataCity, dataDestination } = location.state || {};

  console.log("id", id);
  console.log("dataCity", dataCity);
  console.log("dataDestination", dataDestination);

  const [isDisplayed, setIsDisplayed] = useState("");

  const compactDataCity = dataCity ? dataCity[0] : null;
  console.log("compactDataCity", compactDataCity);

  // const { highBuget, lowBuget, mediumBuget } = compactDataCity.buget;

  //CALCUL

  const searchTerm = "Buget";
  console.log("compactDataCity.buget", compactDataCity.buget);

  const budgetKey = Object.keys(compactDataCity.buget);
  console.log("budgetKey", budgetKey);

  const indexOfFirst = budgetKey[0].indexOf(searchTerm);
  console.log("indexOfFirst", indexOfFirst);

  const slicePosition = budgetKey[0].length - indexOfFirst;
  console.log("slicePosition", slicePosition);

  const transBugetKey = budgetKey.map(
    (e) =>
      e.slice(0, -slicePosition) + " " + e.slice(-slicePosition).toLowerCase()
  );
  console.log("transBugetKey", transBugetKey);

  const displayItem = (key) => {
    console.log("this is select", key);
    switch (key) {
      case "low buget":
        setIsDisplayed(compactDataCity.buget.lowBuget);
        console.log("DISPLAYED", isDisplayed);
        break;
      case "medium buget":
        setIsDisplayed(compactDataCity.buget.mediumBuget);
        console.log("DISPLAYED", isDisplayed);
        break;
      case "high buget":
        setIsDisplayed(compactDataCity.buget.highBuget);
        console.log("DISPLAYED", isDisplayed);
        break;
      default:
        break;
    }
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
              {transBugetKey.map((key, index) => (
                <ListGroup.Item key={index}>
                  <div onClick={() => displayItem(key)}>{key}</div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Sidebar>
          <DisplayContainer loc="DisplayContainer"></DisplayContainer>
        </>
      )}

      {/* {dataCity ? <p>City: {compactDataCity.city}</p> : null}
      {dataDestination ? (
        <div>
          {dataDestination.map((dest, index) => (
            <p key={index}>{dest.name}</p>
          ))}
        </div>
      ) : null} */}

      {/* {dataCity && (
        <>
          <section>
            {}
            <div>{lowBuget.hotelone}</div>
            <div>{lowBuget.hoteltwo}</div>
            <div>{lowBuget.hotelthree}</div>
          </section>
          <section>
            <div>{mediumBuget.hotelone}</div>
            <div>{mediumBuget.hoteltwo}</div>
            <div>{mediumBuget.hotelthree}</div>
          </section>
          <section>
            <div>{highBuget.hotelone}</div>
            <div>{highBuget.hoteltwo}</div>
            <div>{highBuget.hotelthree}</div>
          </section>
        </>
      )} */}
    </div>
  );
}

export default Accommodation;
