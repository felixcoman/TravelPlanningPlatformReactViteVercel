import { useContext, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { itineraryMinus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useFetchData from "../../hooks/useFetchData";
import { DeleteButton } from "../CityCard/CityCard.style";
import { ImgWrapper } from "../DestinationCard/DestinationCard.style";

function CityCard({ country, city, index }) {
  console.log("country", country, "city", city, "index", index);

  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const itineraryValueArray = stateGlobalItinerary.itineraryValue;
  console.log("itineraryValueArray", itineraryValueArray);

  const [clicked, setClicked] = useState(true);
  const [show, setShow] = useState(0);

  const url = `http://localhost:3001/${country}?city=${city}`;
  console.log("url", url);

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  console.log("data", "error", "loading", data, error, loading);

  const handleDelete = (index) => {
    dispatchItinerary(itineraryMinus(index));
    setShow(false);
  };

  const handleCloseShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Modal show={show} onHide={handleCloseShow}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to DELETE "{city}" ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDelete(index)}>
            YES
          </Button>
          <Button variant="secondary" onClick={handleCloseShow}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
      {data &&
        data?.map((card, index) => (
          <Card key={index} className="tangerine-bold">
            <ImgWrapper loc="ImgWrapper">
              <Card.Img variant="top" src={card.image} alt="Image of city" />
            </ImgWrapper>
            <Card.Body>
              <Card.Title>{card.city}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <DeleteButton
                loc="DeleteButton"
                onClick={() => handleCloseShow(index)}
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
