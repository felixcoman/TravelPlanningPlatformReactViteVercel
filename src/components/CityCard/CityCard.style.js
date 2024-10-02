import { Link } from "react-router-dom";
import styled from "styled-components";
import { RED, WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const DeleteButton = styled(Link)`
  background: ${RED};
  color: ${WHITE_NEUTRAL};
  font-family: "Trebuchet MS", sans-serif;
  font-size: ${TEXT_SIZE_SMALL};
  font-weight: 500;
  width: 100%;
  padding: 6px 12px;
  min-width: fit-content;
  border-radius: 5px;
  text-align: center;
  align-content: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;
