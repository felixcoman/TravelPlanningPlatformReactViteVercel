import { useState } from "react";
import { Card } from "react-bootstrap";
import { ButtonLandmark } from "../DestinationCard/DestinationCard.style";
import useFetchData from "../../hooks/useFetchData";

function CityCard({ country, city }) {
  console.log("country", country, "city", city);

  const [clicked, setClicked] = useState(true);

  const url = `http://localhost:3001/${country}?city=${city}`;
  console.log("url", url);

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  console.log("data", "error", "loading", data, error, loading);

  return (
    <>
      {data &&
        data?.map((card, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.image} alt="Image of landmark" />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <ButtonLandmark loc="ButtonLandmark" to={`/intinerary`}>
                Save landmark to my intinerary!
              </ButtonLandmark>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
export default CityCard;
