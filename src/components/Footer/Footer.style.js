import styled from "styled-components";
import { DARK_BLUE, WHITE_NEUTRAL, MIDDLE_BLUE } from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";
import { Link } from "react-bootstrap-icons";

export const FooterContainer = styled.div`
  background-color: ${DARK_BLUE};
  color: ${WHITE_NEUTRAL};
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 20px; */
  padding: 15px 15px;
  height: 15vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 10px;
`;

export const FooterInfo = styled.p`
  margin: 5px;
  @media screen and (max-width: 768px) {
    font-size: ${TEXT_SIZE_SMALL};
  }
`;

export const Copyrights = styled.p`
  margin: 10px;

  @media screen and (max-width: 768px) {
    font-size: ${TEXT_SIZE_SMALL};
    margin-top: 20px;
  }
`;

export const AboutCredits = styled(Link)`
  background: ${MIDDLE_BLUE};
  color: ${WHITE_NEUTRAL};
  align-content: center;
  height: 64px;
  width: 100%;
  padding: 6px 12px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
