import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  WHITE_NEUTRAL,
  YELLOW,
  MIDDLE_BLUE,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const Title = styled.h1`
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_MEDIUM};
`;

export const ContainerTop = styled.div`
  position: relative;
`;

export const ImageCity = styled.img`
  width: 100%;
  height: 70vh;
  opacity: 0.6;
  object-fit: contain;
`;

export const ContainerDescriptionTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  color: ${ORANGE};
`;

export const Subtitle = styled.h2`
  font-size: ${TEXT_SIZE_MEDIUM};
  text-align: left;
`;

export const CountrySubtitle = styled(Subtitle)`
  text-transform: capitalize;
`;

export const ContainerDescriptionBottom = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  background-color: rgba(255, 165, 0, 0.3);
`;

export const CityDescription = styled.h3`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${TEXT_SIZE_SMALL};
  color: ${WHITE_NEUTRAL};
  text-align: justify;
`;

export const SectionCityData = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
`;

export const SectionCityButtons = styled.section`
  display: flex;
  flex-direction: row;
  margin: 50px 0;
`;

export const ButtonCity = styled(Link)`
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  width: 100%;
  padding: 6px 12px;
  margin: 2px 0;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const SectionLandmarkData = styled.section`
  /* display: flex;
  margin: 10px 0; */
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  align-items: center;
`;

export const InfoUser = styled.div`
  display: flex;
  color: ${MIDDLE_BLUE};
  font-size: ${TEXT_SIZE_SMALL};
  width: 100%;
  justify-content: center;
`;

export const ButtonInfo = styled(ButtonCity)`
  background: ${MIDDLE_BLUE};
  color: ${WHITE_NEUTRAL};
  width: 50vw;
`;
