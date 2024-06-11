import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { IntineraryContext } from "../../global/intinerary/context";
import useFetchData from "../../hooks/useFetchData";
import {
  ButtonLandmark,
  CardImgContainer,
} from "../DestinationCard/DestinationCard.style";

function CityCard({ country, city }) {
  console.log("country", country, "city", city);

  const { stateGlobalIntinerary } = useContext(IntineraryContext);

  const intineraryValueArray = stateGlobalIntinerary.intineraryValue;

  console.log("intineraryValueArray", intineraryValueArray);

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
            <CardImgContainer loc="CardImgContainer">
              <Card.Img
                className="card-img"
                variant="top"
                src={card.image}
                alt="Image of landmark"
              />
            </CardImgContainer>
            <Card.Body className="card-body">
              <Card.Title>{card.name}</Card.Title>
              <Card.Text className="card-text">{card.description}</Card.Text>
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
