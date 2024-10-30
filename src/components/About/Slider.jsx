import Carousel from "react-bootstrap/Carousel";
import { Error, Loading } from "../Contact/Contact.style";
import { SliderImg } from "./About.style";

function Slider({ className, images, loading, error }) {
  return (
    <>
      <Carousel className={className}>
        {images &&
          images.map((item, index) => (
            <Carousel.Item key={index}>
              <SliderImg
                loc="SliderImg"
                src={item.image}
                alt={"slideshow image ".concat(item.id)}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      {loading && (
        <Loading loc="Loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          Loading... Waiting for landing...
        </Loading>
      )}
      {error && (
        <Error loc="Error">
          Error: {error.message} Our team is called from the coffee break and
          will take care of the problem!
        </Error>
      )}
    </>
  );
}

export default Slider;
