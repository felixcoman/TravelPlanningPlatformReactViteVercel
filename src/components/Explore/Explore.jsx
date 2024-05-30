import { useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {
  ButtonCity,
  ButtonLandmark,
  CityDescription,
  Subtitle,
  Title,
  CountrySubtitle,
  SectionCityData,
  SectionLandmarkData,
  SectionCityButtons,
} from "./Explore.style";

const Explore = () => {
  const { country, city } = useParams();

  const [clicked, setClicked] = useState(true);

  const url =
    country && city ? `http://localhost:3001/${country}?city=${city}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  const compactData = data ? data[0] : null;

  console.log("compactData", compactData);

  return (
    <>
      <SectionCityData>
        <Title>Feel free to explore our offers regarding your selection:</Title>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <div>
            <CountrySubtitle>Country: {country}</CountrySubtitle>
            <Subtitle>Region: {compactData.region}</Subtitle>
            <Subtitle>City: {city}</Subtitle>
            <CityDescription>
              Description: {compactData.description}
            </CityDescription>
          </div>
        )}
      </SectionCityData>
      {data && (
        <SectionLandmarkData>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="holder.js/100px180"
              alt="Image of landmark"
            />
            <Card.Body>
              <Card.Title>Landmark Title</Card.Title>
              <Card.Text>Description of landmark</Card.Text>
              <ButtonLandmark to={`/intinerary`}>
                Save landmark to my intinerary!
              </ButtonLandmark>
            </Card.Body>
          </Card>
        </SectionLandmarkData>
      )}
      <SectionCityButtons>
        <ButtonCity to={`/intinerary`}>
          Save {city} to my intinerary!
        </ButtonCity>
        <ButtonCity>I want to book accommodation!</ButtonCity>
      </SectionCityButtons>
    </>
  );
};

export default Explore;
