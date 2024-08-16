import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { ItineraryContext } from "../../global/itinerary/context";
import useFetchData from "../../hooks/useFetchData";
import { DeleteButton } from "../CityCard/CityCard.style";
import { ImgWrapper } from "../DestinationCard/DestinationCard.style";

function LandmarkCard({
  name,
  indexL,
  handleDeleteL,
  showL,
  setShowL,
  setShowIdL,
  clicked,
  setClicked,
}) {
  console.log("name", name, "indexL", indexL);

  const { stateGlobalItinerary } = useContext(ItineraryContext);

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue;
  console.log("itineraryLandmarkValueArray", itineraryLandmarkValueArray);

  const url = `http://localhost:3001/destinations?name=${name}`;
  console.log("url", url);

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  console.log("data", "error", "loading", data, error, loading);

  const handleCloseShowL = () => {
    setShowL(!showL), setShowIdL(indexL);
  };
  return (
    <>
      <Modal show={showL} onHide={handleCloseShowL}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to DELETE "{name}" ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDeleteL(indexL)}>
            YES
          </Button>
          <Button variant="secondary" onClick={handleCloseShowL}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
      {data &&
        data?.map((card, ind) => (
          <Card key={ind} className="tangerine-bold">
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
                onClick={() => handleCloseShowL()}
              >
                Remove from My Itinerary
              </DeleteButton>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
export default LandmarkCard;
