import { Link } from "react-router-dom";
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
  padding: 15px 15px;
  height: 15vh;
  font-size: ${TEXT_SIZE_SMALL};

  @media screen and (max-width: 840px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0;
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
  @media screen and (max-width: 840px) {
  }
`;

export const Copyrights = styled.p`
  margin: 10px;

  @media screen and (max-width: 840px) {
  }
`;

export const Credits = styled(Link)`
  color: ${WHITE_NEUTRAL};
  margin: 10px;
  text-align: center;
  align-content: center;
  width: fit-content;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
