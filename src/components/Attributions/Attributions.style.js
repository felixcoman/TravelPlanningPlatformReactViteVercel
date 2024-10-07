import styled from "styled-components";
import { HANDWRITING } from "../../constants/Colors";
import { TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const AttributionsSection = styled.small`
  /* display: flex;
  flex-direction: column; */
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
