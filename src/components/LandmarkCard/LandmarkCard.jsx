import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { itineraryLandmarkMinus } from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useFetchData from "../../hooks/useFetchData";
import { DeleteButton } from "../CityCard/CityCard.style";
import { ImgWrapper } from "../DestinationCard/DestinationCard.style";

function LandmarkCard({ name, index }) {
  console.log("name", name, "index", index);

  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue;
  console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);

  const [clicked, setClicked] = useState(true);
  const [show, setShow] = useState(0);

  const url = `http://localhost:3001/destinations?name=${name}`;
  console.log("url", url);

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  console.log("data", "error", "loading", data, error, loading);

  const handleDelete = (index) => {
    dispatchItinerary(itineraryLandmarkMinus(index));
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
          <p>Are you sure you want to DELETE "{name}" ?</p>
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
              <Card.Img
                variant="top"
                src={card.image}
                alt="Image of landmark"
              />
            </ImgWrapper>
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <DeleteButton
                loc="DeleteButton"
                onClick={() => handleCloseShow(index)}
              >
                Delete from Itinerary
              </DeleteButton>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
export default LandmarkCard;
