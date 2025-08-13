import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_BLUE, WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";

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
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const ImgWrapperCard = styled.div`
  display: flex;
  height: 670px;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-end;
  overflow: hidden;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  @media screen and (max-height: 1000px) {
    height: 500px;
  }
  @media screen and (max-height: 800px) {
    height: 490px;
  }
  @media screen and (max-height: 700px) {
    height: 395px;
  }
  @media screen and (max-height: 600px) {
    height: 320px;
  }
  @media screen and (max-height: 500px) {
    height: 250px;
  }
  @media screen and (max-height: 400px) {
    height: 220px;
  }
  @media screen and (max-height: 300px) {
    height: 180px;
  }
`;
