import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  RED,
  WHITE_NEUTRAL,
  YELLOW,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const Sidebar = styled.aside`
  width: 140px;
  /* position: fixed; */
  z-index: 1;
  top: 110px;
  left: 10px;
  background: ${DARK_BLUE};
  overflow-x: hidden;
  padding: 8px 0;
`;

export const LocationTitle = styled.div`
  background: ${DARK_BLUE};
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_SMALL};
`;

export const DisplayContainer = styled.section`
  margin-left: 140px; /* Same width as the sidebar + left position in px */
  font-size: ${TEXT_SIZE_MEDIUM}; /* Increased text to enable scrolling */
  padding: 0px 10px;
`;

export const ItemLink = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;
