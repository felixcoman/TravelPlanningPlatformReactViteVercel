import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  WHITE_NEUTRAL,
  YELLOW,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";
import { Link } from "react-router-dom";

export const ButtonLandmark = styled(Link)`
  background: ${DARK_BLUE};
  color: ${WHITE_NEUTRAL};
  font-family: "Trebuchet MS", sans-serif;
  font-size: ${TEXT_SIZE_SMALL};
  font-weight: 500;
  width: 100%;
  padding: 6px 12px;
  margin: 2px 0;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  display: flex;
  min-height: 500px;
  height: auto;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-end;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;
