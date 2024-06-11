import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  WHITE_NEUTRAL,
  YELLOW,
  MIDDLE_BLUE,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const SectionIntineraryData = styled.div`
  /* display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px; */

  display: grid;
  gap: 10px;
  width: 90vw;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(calc(50vw / 3), 1fr));
  margin-bottom: 20px;
  justify-items: center;
`;
export const InfoUser = styled.div`
  color: ${MIDDLE_BLUE};
  width: 60vw;
  font-size: ${TEXT_SIZE_SMALL};
`;
