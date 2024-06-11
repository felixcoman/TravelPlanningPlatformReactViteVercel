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
  width: 100%;
  padding: 6px 12px;
  margin: 2px 0;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const CardImgContainer = styled.div`
  display: flex;
  height: 220px;
  justify-content: center;
`;
