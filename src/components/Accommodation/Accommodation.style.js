import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  RED,
  WHITE_NEUTRAL,
  YELLOW,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM } from "../../constants/Dimensions";

export const Sidebar = styled.aside`
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 10px;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;
`;

export const LocationTitle = styled.div`
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_MEDIUM};
`;

export const DisplayContainer = styled.section`
  margin-left: 140px; /* Same width as the sidebar + left position in px */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
`;

export const ItemLink = styled(Link)`
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  width: 100%;
  padding: 6px 12px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
