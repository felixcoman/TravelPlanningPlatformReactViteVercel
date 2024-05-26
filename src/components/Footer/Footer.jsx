import {
  FooterContainer,
  FooterInfoContainer,
  FooterInfo,
  Copyrights,
} from "./Footer.style";

function Footer() {
  return (
    <>
      <FooterContainer loc="FooterContainer">
        <FooterInfoContainer loc="FooterInfoContainer">
          <FooterInfo loc="FooterInfo">Mobile: +407454545 </FooterInfo>
          <FooterInfo loc="FooterInfo">
            {" "}
            Email: travelplanningplatform@gmail.com{" "}
          </FooterInfo>
        </FooterInfoContainer>
        <Copyrights loc="Copyrights">@copyrights 2024</Copyrights>
      </FooterContainer>
    </>
  );
}

export default Footer;
