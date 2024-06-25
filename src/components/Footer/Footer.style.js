import styled from "styled-components";
import { DARK_BLUE, WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";

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
