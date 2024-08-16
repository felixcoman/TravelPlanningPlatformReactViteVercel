import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { ItineraryContext } from "../../global/itinerary/context";
import useFetchData from "../../hooks/useFetchData";
import { DeleteButton } from "../CityCard/CityCard.style";
import { ImgWrapper } from "../DestinationCard/DestinationCard.style";

function CityCard({
  country,
  city,
  indexC,
  handleDeleteC,
  showC,
  setShowC,
  setShowIdC,
  clicked,
  setClicked,
}) {
  console.log("country", country, "city", city, "indexC", indexC);

  const { stateGlobalItinerary } = useContext(ItineraryContext);

  const itineraryValueArray = stateGlobalItinerary.itineraryValue;
  console.log("itineraryValueArray", itineraryValueArray);

  const url = `http://localhost:3001/${country}?city=${city}`;
  console.log("url", url, "clicked", clicked);

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  console.log("data", "error", "loading", data, error, loading);

  const handleCloseShowC = () => {
    setShowC(!showC), setShowIdC(indexC);
  };
  return (
    <>
      <Modal show={showC} onHide={handleCloseShowC}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to DELETE "{city}" ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDeleteC(indexC)}>
            YES
          </Button>
          <Button variant="secondary" onClick={handleCloseShowC}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
      {data &&
        data?.map((card, ind) => (
          <Card key={ind} className="tangerine-bold">
            <ImgWrapper loc="ImgWrapper">
              <Card.Img variant="top" src={card.image} alt="Image of city" />
            </ImgWrapper>
            <Card.Body>
              <Card.Title>{card.city}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <DeleteButton
                loc="DeleteButton"
                onClick={() => handleCloseShowC()}
              >
                Remove from My Itinerary
              </DeleteButton>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
export default CityCard;
