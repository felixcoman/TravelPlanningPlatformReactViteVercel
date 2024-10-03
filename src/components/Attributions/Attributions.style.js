import styled from "styled-components";
import {
  ORANGE,
  WHITE_NEUTRAL,
  GRADIENT_BLUE_LIGHT,
  HANDWRITING,
} from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const AttributionsSection = styled.small`
  color: ${HANDWRITING};
  font-size: ${TEXT_SIZE_SMALL};
  font-family: "Trebuchet MS", sans-serif;
  & > a {
    text-decoration: none;
    color: ${HANDWRITING};
  }
  & > small {
    font-size: ${TEXT_SIZE_SMALL};
    & > a {
      text-decoration: none;
      color: ${HANDWRITING};
    }
  }
`;
