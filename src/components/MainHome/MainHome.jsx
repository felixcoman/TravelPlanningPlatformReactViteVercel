import {
  MainContainer,
  MainHomeGalleryItem,
  SectionMainContainer,
} from "./MainHome.style";
import { AttributionsSection } from "../Attributions/Attributions.style";
import Slider from "../About/Slider";
const images = [
  {
    src: "https://fastly.picsum.photos/id/397/4475/2984.jpg?hmac=_PEWxhdxVnCU15wD6E-blJDbpMVH17QQVV0JYMZnkjc",
    alt: "Image 1",
  },
  {
    src: "https://fastly.picsum.photos/id/377/4884/3256.jpg?hmac=OLVw864UkoqYrrRmC1Xh5-5DtczeP7iEZKMlv1YLwac",
    alt: "Image 2",
  },
  {
    src: "https://fastly.picsum.photos/id/257/5000/3333.jpg?hmac=B0TMVZJOXC_cBK0gZj5EzCBnCwoBMEyvt9t8AbJDkdA",
    alt: "Image 3",
  },
  {
    src: "https://fastly.picsum.photos/id/211/1920/1280.jpg?hmac=5feWJpfa59_r1yi4NCuTxY9IWrNWZqEUDIAwrtKId9s",
    alt: "Image 4",
  },
  {
    src: "https://fastly.picsum.photos/id/164/1200/800.jpg?hmac=wkqGUkaeW3kiAsHq_VwxSWWossIMAwFV4eUfFzuDkew",
    alt: "Image 5",
  },
  {
    src: "https://fastly.picsum.photos/id/871/5000/3338.jpg?hmac=0cbFAJ55kp9mwznL2aX6NTWQp1VXOICQq-kaivG-Q_A",
    alt: "Image 5",
  },
  {
    src: "https://fastly.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I",
    alt: "Image 5",
  },
  {
    src: "https://fastly.picsum.photos/id/1040/4496/3000.jpg?hmac=kvZONlBpTcZ16PuE_g2RWxlicQ5JKVq2lqqZndfafBY",
    alt: "Image 5",
  },
  {
    src: "https://fastly.picsum.photos/id/116/3504/2336.jpg?hmac=C46vgpj3R407e8pCyy8NhIsNaBZCjb4r5d71keNgMJY",
    alt: "Image 5",
  },
];

function MainHome() {
  return (
    <SectionMainContainer loc="SectionMainContainer">
      <MainContainer loc="MainContainer">
        {images.map((image, index) => (
          <MainHomeGalleryItem
            loc="MainHomeGalleryItem"
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </MainContainer>
      <Slider loc="Slide" className="carousel-home" />
      <AttributionsSection loc="AttributionsSection">
        Copyright: Images from <a href="https://picsum.photos/">Lorem Picsum</a>
      </AttributionsSection>
    </SectionMainContainer>
  );
}

export default MainHome;
