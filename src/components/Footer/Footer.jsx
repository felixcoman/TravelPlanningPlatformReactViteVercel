import {
  FooterContainer,
  FooterInfoContainer,
  FooterInfo,
  Copyrights,
  AboutCredits,
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
        <Copyrights loc="Copyrights">copyright {year}</Copyrights>
        <AboutCredits loc="AboutCredits" to={`/about`}>
          Credits
        </AboutCredits>
      </FooterContainer>
    </>
  );
}

export default Footer;
