import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BLUE,
  HANDWRITING,
  LIFELINE_ORANGE,
  MIDDLE_BLUE,
  ORANGE,
  PAPER_COLOR,
  WHITE_NEUTRAL,
} from "../../constants/Colors";
import {
  TEXT_SIZE_MEDIUM,
  TEXT_SIZE_SMALL,
  TEXT_SIZE_BIG,
} from "../../constants/Dimensions";
import { ButtonAccommodation } from "../Itinerary/Itinerary.style";

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
  padding: 5px;
  margin-bottom: 5vh;
  align-self: center;

  @media screen and (max-width: 800px) {
    width: 250px;
  }
`;

export const ContainerTop = styled.div`
  display: grid;
  position: relative;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 62vh;
  margin-bottom: 20px;

  @media screen and (max-height: 1400px) and (max-width: 1200px) {
    height: 50vh;
  }
  @media screen and (max-height: 1300px) {
    height: 68vh;
  }
  @media screen and (max-height: 1300px) and (max-width: 2000px) {
    height: 42vh;
  }
  @media screen and (max-height: 1200px) {
    height: 68vh;
  }
  @media screen and (max-height: 1200px) and (max-width: 900px) {
    height: 47vh;
  }
  @media screen and (max-height: 1200px) and (max-width: 800px) {
    height: 44vh;
  }
  @media screen and (max-height: 1200px) and (max-width: 600px) {
    height: 42vh;
  }
  @media screen and (max-height: 1000px) {
    height: 68vh;
  }
  @media screen and (max-height: 1000px) and (max-width: 600px) {
    height: 45vh;
  }
  @media screen and (max-height: 1000px) and (max-width: 500px) {
    height: 36vh;
  }
  @media screen and (max-height: 900px) {
    height: 68vh;
  }
  @media screen and (max-height: 900px) and (max-width: 500px) {
    height: 37vh;
  }
  @media screen and (max-height: 900px) and (max-width: 400px) {
    height: 38vh;
  }
  @media screen and (max-height: 900px) and (max-width: 350px) {
    height: 35vh;
  }
  @media screen and (max-height: 700px) {
    height: 68vh;
  }
  @media screen and (max-height: 700px) and (max-width: 500px) {
    height: 45vh;
  }
  @media screen and (max-height: 700px) and (max-width: 400px) {
    height: 45vh;
  }
  @media screen and (max-height: 550px) {
    height: 48vh;
  }
  @media screen and (max-height: 400px) {
    height: 88vh;
    margin-bottom: 55px;
  }
`;

export const ImageCity = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
`;

export const MyStamp = styled.div`
  z-index: 10;
  transition: all 1s;
  position: absolute;
  top: -85px;
  left: -60px;

  @media screen and (max-width: 1400px) {
    transform: scale(0.75);
    top: -65px;
    left: -100px;
  }
  @media screen and (max-width: 1000px) {
    top: -70px;
    left: -120px;
  }
  @media screen and (max-width: 800px) {
    transform: scale(0.6);
    top: -70px;
    left: -100px;
  }
  @media screen and (max-width: 500px) {
    transform: scale(0.45);
    top: -60px;
    left: -85px;
  }
  @media screen and (max-width: 400px) {
    transform: scale(0.4);
    top: -35px;
    left: -100px;
  }
  @media screen and (max-width: 300px) {
    transform: scale(0.4);
    top: -4px;
    left: -100px;
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

export const ContainerDescriptionBottom = styled.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-image: url("../../../images/897940_2588.jpg");
  background-size: cover;
  align-self: center;
  padding: 50px 10px;
  justify-content: center;
`;

export const CityDescription = styled.h3`
  color: ${HANDWRITING};
  font-size: ${TEXT_SIZE_BIG};
  display: flex;
  width: 80%;
  margin: 20px 20px;
  text-align: justify;
  font-weight: bold;
`;

export const SectionCityData = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;
  width: 90%;
  padding: 0 10px;
  max-width: 1440px;
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
  font-family: "Trebuchet MS", sans-serif;
  font-size: ${TEXT_SIZE_SMALL};
  font-weight: 500;
  width: 100%;
  padding: 6px 12px;
  margin: 10px;
  min-width: fit-content;
  border-radius: 5px;
  text-align: center;
  align-content: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: solid 2px white;
    box-shadow: 0 0 80px ${LIFELINE_ORANGE};
  }
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const ButtonAccommodationExplore = styled(ButtonAccommodation)`
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const SectionLandmarkDataWrapper = styled.section`
  width: 90%;

  @media screen and (min-height: 900px) and (min-width: 500px) {
    width: 80%;
  }
  @media screen and (max-height: 600px) {
    width: 65%;
  }
  @media screen and (max-height: 500px) {
    width: 70%;
  }
  @media screen and (max-width: 300px) {
    width: 80%;
  }
`;

export const SectionLandmarkData = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media screen and (max-width: 1800px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  min-width: 290px;
  height: 67vh;
  min-height: 880px;

  @media screen and (max-width: 1600px) {
    min-height: unset;

    justify-content: center;
  }

  @media screen and (max-width: 840px) {
    min-height: unset;

    height: 60vh;
  }
`;

export const InfoUser = styled.div`
  color: ${MIDDLE_BLUE};
  font-size: ${TEXT_SIZE_SMALL};
  display: flex;
  width: 100%;
  margin: 18px 0;
  justify-content: center;
`;

export const SectionInfoButtons = styled(SectionCityButtons)``;

export const ButtonInfo = styled(ButtonCity)`
  background: ${MIDDLE_BLUE};
  color: ${WHITE_NEUTRAL};
  width: 40%;
  align-self: center;
`;
