import { useEffect, useRef } from "react";
import {
  FooterContainer,
  FooterContent,
  FooterInfoContainer,
  FooterInfo,
  Copyrights,
} from "./Footer.style";

function Footer({ onHeightChange }) {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  // Read height of element from DOM
  useEffect(() => {
    if (!footerRef.current) return;
    // Initial height measurement
    const updateHeight = () => {
      onHeightChange(footerRef.current.offsetHeight);
    };

    updateHeight();

    // Observe size changes dynamically
    const observer = new ResizeObserver(updateHeight);
    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, [onHeightChange]);
  return (
    <>
      <FooterContainer loc="FooterContainer" ref={footerRef}>
        <FooterContent loc="FooterContent">
          <FooterInfoContainer loc="FooterInfoContainer">
            <FooterInfo loc="FooterInfo">Mobile: +40748478887 </FooterInfo>
            <FooterInfo loc="FooterInfo">
              Email: felixvictor_coman@yahoo.com
            </FooterInfo>
          </FooterInfoContainer>
          <Copyrights loc="Copyrights">copyright {year}</Copyrights>
        </FooterContent>
      </FooterContainer>
    </>
  );
}

export default Footer;
