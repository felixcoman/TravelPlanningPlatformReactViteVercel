import styled from "styled-components";
import { DARK_BLUE, WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const FooterContainer = styled.div`
  margin-top: 20px;
  padding: 16px 0;
  background-color: ${DARK_BLUE};
  color: ${WHITE_NEUTRAL};
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const FooterInfo = styled.p`
  margin: 5px;
  @media screen and (max-width: 768px) {
    font-size: ${TEXT_SIZE_SMALL};
  }
`;

export const Copyrights = styled.p`
  margin: 3px;
  @media screen and (max-width: 768px) {
    font-size: ${TEXT_SIZE_SMALL};
    margin-top: 20px;
  }
`;
