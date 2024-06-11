import { Card } from "react-bootstrap";
import { ButtonLandmark } from "../DestinationCard/DestinationCard.style";

function DestionationCard({ name, image, description, popularity }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt="Image of landmark" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ButtonLandmark loc="ButtonLandmark" to={`/intinerary`}>
          Save landmark to my intinerary!
        </ButtonLandmark>
      </Card.Body>
    </Card>
  );
}
export default DestionationCard;
