import {
  FooterContainer,
  FooterInfoContainer,
  FooterInfo,
  Copyrights,
  Credits,
} from "./Footer.style";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <FooterContainer loc="FooterContainer">
        <FooterInfoContainer loc="FooterInfoContainer">
          <FooterInfo loc="FooterInfo">Mobile: +407454545 </FooterInfo>
          <FooterInfo loc="FooterInfo">
            Email: travelplanningplatform@gmail.com
          </FooterInfo>
        </FooterInfoContainer>
        <Credits loc="Credits" to={`/about`}>
          Click for credits
        </Credits>
        <Copyrights loc="Copyrights">copyright {year}</Copyrights>
      </FooterContainer>
    </>
  );
}

export default Footer;
