import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  WHITE_NEUTRAL,
  YELLOW,
  MIDDLE_BLUE,
  LIFELINE_ORANGE,
  PAPER_COLOR,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const SectionMainItinerary = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  padding: 15px;
`;

export const ItineraryData = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const ButtonAccommodation = styled.button`
  background: ${PAPER_COLOR};
  color: ${DARK_BLUE};
  font-family: "Trebuchet MS", sans-serif;
  font-size: ${TEXT_SIZE_SMALL};
  font-weight: 500;
  width: 40%;
  min-width: fit-content;
  padding: 6px 12px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: solid 2px white;
    box-shadow: 0 0 80px ${LIFELINE_ORANGE};
  }
`;
