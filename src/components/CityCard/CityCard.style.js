import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  RED,
  WHITE_NEUTRAL,
  YELLOW,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";
import { Link } from "react-router-dom";

export const DeleteButton = styled(Link)`
  background: ${RED};
  color: ${WHITE_NEUTRAL};
  width: 100%;
  padding: 6px 12px;
  margin: 2px 0;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
