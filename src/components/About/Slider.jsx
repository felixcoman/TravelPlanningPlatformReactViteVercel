import Carousel from "react-bootstrap/Carousel";
import { SliderImg } from "./About.style";
import "bootstrap/dist/css/bootstrap.css";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <SliderImg
            loc="SliderImg"
            src="https://fastly.picsum.photos/id/397/4475/2984.jpg?hmac=_PEWxhdxVnCU15wD6E-blJDbpMVH17QQVV0JYMZnkjc"
            alt="Img"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SliderImg
            loc="SliderImg"
            src="https://fastly.picsum.photos/id/377/4884/3256.jpg?hmac=OLVw864UkoqYrrRmC1Xh5-5DtczeP7iEZKMlv1YLwac"
            alt="Img"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SliderImg
            loc="SliderImg"
            src="https://fastly.picsum.photos/id/257/5000/3333.jpg?hmac=B0TMVZJOXC_cBK0gZj5EzCBnCwoBMEyvt9t8AbJDkdA"
            alt="Img"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SliderImg
            loc="SliderImg"
            src="https://fastly.picsum.photos/id/1040/4496/3000.jpg?hmac=kvZONlBpTcZ16PuE_g2RWxlicQ5JKVq2lqqZndfafBY"
            alt="Img"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SliderImg
            loc="SliderImg"
            src="https://fastly.picsum.photos/id/164/1200/800.jpg?hmac=wkqGUkaeW3kiAsHq_VwxSWWossIMAwFV4eUfFzuDkew"
            alt="Img"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
