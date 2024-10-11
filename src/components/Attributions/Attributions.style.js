import styled from "styled-components";
import { MIDDLE_BLUE, YELLOW } from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const AttributionsSection = styled.small`
  color: ${(props) => (props.variant === "card" ? YELLOW : MIDDLE_BLUE)};
  font-size: ${TEXT_SIZE_SMALL};
  font-family: "Trebuchet MS", sans-serif;
  padding: 10px;
  & > a {
    text-decoration: none;
    color: ${(props) => (props.variant === "card" ? YELLOW : MIDDLE_BLUE)};
  }
  & > small {
    font-size: ${TEXT_SIZE_SMALL};
    & > a {
      text-decoration: none;
      color: ${(props) => (props.variant === "card" ? YELLOW : MIDDLE_BLUE)};
    }
  }
`;
