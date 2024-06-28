import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  WHITE_NEUTRAL,
  YELLOW,
  MIDDLE_BLUE,
  HANDWRITING,
  PAPER_COLOR,
  LIFELINE_ORANGE,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const SectionExplore = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: ${TEXT_SIZE_MEDIUM};
  padding: 15px;
`;

export const Title = styled.h1`
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_MEDIUM};
  margin-bottom: 65px;
`;

export const ContainerTop = styled.div`
  position: relative;
  align-self: center;
  width: 100%;
  min-height: 85vh;
  margin-bottom: 10px;
  @media screen and (max-width: 1600px) {
    height: auto;
  }
`;

export const ImageCity = styled.img`
  padding: 10px;
  width: 100%;
  /* height: 70vh; */
  opacity: 0.6;
  object-fit: contain;
  border-radius: 6px;
`;

export const MyStamp = styled.div`
  @media screen and (max-width: 1400px) {
    transition: all 1s;
    position: absolute;
    transform: scale(0.75);
    top: 70px;
    left: -40px;
  }
  @media screen and (max-width: 1000px) {
    top: 75px;
    left: -45px;
  }
  @media screen and (max-width: 800px) {
    transform: scale(0.6);
    top: 75px;
    left: -20px;
  }
  @media screen and (max-width: 500px) {
    transform: scale(0.5);
    top: 75px;
    left: -20px;
  }
`;

export const ContainerDescriptionTop = styled.div`
  color: ${ORANGE};
  position: absolute;
  top: -21px;
  left: 174px;
  margin: 10px;
  transform: rotate(348deg);
  background: rgba(89, 1, 15);
  width: 140px;
  height: 182px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 840px) {
  }
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
  border-radius: 6px;
  background-image: url("../../../src/assets/897940_2588.jpg");
  background-size: cover;
  align-self: center;
  padding: 50px 10px;
  justify-content: center;
`;

export const CityDescription = styled.h3`
  color: ${HANDWRITING};
  font-size: clamp(25px, 2vw, 40px);
  display: flex;
  width: 80%;
  margin: 20px 20px;
  text-align: justify;
  font-weight: bold;
`;

export const SectionCityData = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  width: 90%;
`;

export const SectionCityButtons = styled.section`
  display: flex;
  flex-direction: row;
  margin: 16px 0;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
`;

export const ButtonCity = styled(Link)`
  background: ${PAPER_COLOR};
  color: ${DARK_BLUE};
  width: 100%;
  padding: 6px 12px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  align-content: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  transition: all 0.5s;
  &:hover {
    border: solid 2px white;
    box-shadow: 0 0 80px ${LIFELINE_ORANGE};
  }
`;

export const ButtonAccomodation = styled.button`
  background: ${PAPER_COLOR};
  color: ${DARK_BLUE};
  width: 100%;
  padding: 6px 12px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  transition: all 0.5s;
  &:hover {
    border: solid 2px white;
    box-shadow: 0 0 80px ${LIFELINE_ORANGE};
  }
`;

export const SectionLandmarkData = styled.section`
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

export const SectionInfoButtons = styled(SectionCityButtons)``;

export const ButtonInfo = styled(ButtonCity)`
  background: ${MIDDLE_BLUE};
  color: ${WHITE_NEUTRAL};
  align-content: center;
  height: 64px;
`;
