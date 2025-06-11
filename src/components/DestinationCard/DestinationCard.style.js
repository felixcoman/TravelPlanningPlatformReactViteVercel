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

export const ImgWrapper = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-end;
  overflow: hidden;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
