import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  RED,
  WHITE_NEUTRAL,
  YELLOW,
  MIDDLE_BLUE,
  GRADIENT_BLUE_DARK,
  GRADIENT_BLUE_MIDDLE,
  GRADIENT_BLUE_LIGHT,
  LIFELINE_ORANGE,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const MainContainer = styled.div`
  display: grid;
  height: 600px;
  grid-template-columns: 0fr 0fr 0fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px;
  margin: 10px 20px;

  @media screen and (max-width: 1600px) {
    height: auto;
  }

  @media screen and (max-width: 1300px) {
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    grid-gap: 1px;
    height: auto;
  }
`;

export const MainHomeGalleryItem = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1600px) {
    width: 250px;
  }

  @media screen and (max-width: 1300px) {
    width: 150px;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

export const MainButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;

  @media screen and (max-width: 1600px) {
    justify-content: center;
    position: relative;
  }

  @media screen and (max-width: 1300px) {
    width: 350px;
    height: 300px;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  margin: 30px auto;
  height: auto;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1600px) {
    top: -100px;
  }

  @media screen and (max-width: 1300px) {
    margin: 10px auto;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const ButtonsContainer = styled.div`
  /* display: flex;
  height: 90%; */
`;

export const Buttons = styled.button`
  width: 200px;
  height: 70px;
  font-weight: 500;
  font-size: ${TEXT_SIZE_SMALL};
  color: ${DARK_BLUE};
  margin: 0 10px;
  cursor: pointer;
  border-radius: 8px;
  font-family: "Trebuchet MS", sans-serif;
  border-style: none;
  background-image: linear-gradient(
    54.54deg,
    ${GRADIENT_BLUE_LIGHT} 8.812%,
    ${GRADIENT_BLUE_MIDDLE} 37.468%,
    ${GRADIENT_BLUE_DARK} 68.374%
  );
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 5px;
  transition: all 0.5s;

  &:hover {
    background: ${LIFELINE_ORANGE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
    box-shadow: 0 0 80px ${LIFELINE_ORANGE};
  }
  &:focus {
    background: ${LIFELINE_ORANGE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
    box-shadow: 0 0 80px ${LIFELINE_ORANGE};
  }
  @media screen and (max-width: 1300px) {
    width: 100%;
    margin: 5px 0px;
    flex-direction: column;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 5px 0px;
    flex-direction: column;
    height: auto;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  margin: 15px 30px auto;
  position: absolute;
  top: 110px;

  @media screen and (max-width: 1300px) {
    top: 90px;
  }
`;
export const Select = styled.select`
  width: 150px;
  height: 35px;
  border-radius: 8px;
  margin: 0 10px;
  text-align: center;
  font-weight: 500;
  border-style: none;
  font-size: ${TEXT_SIZE_SMALL};
  background: ${GRADIENT_BLUE_LIGHT};

  @media screen and (max-width: 1300px) {
    height: auto;
  }
`;

export const SelectPlan = styled.select`
  width: 200px;
  height: 35px;
  border-radius: 8px;
  margin: 0 10px;
  text-align: center;
  font-weight: 500;
  border-style: none;
  font-size: ${TEXT_SIZE_SMALL};
  background: ${GRADIENT_BLUE_LIGHT};

  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 90%;
    height: 35px;
  }
`;

export const Option = styled.option`
  font-weight: 500;
  font-size: ${TEXT_SIZE_SMALL};
  border-radius: 8px;
`;

export const HomeBtn = styled(Link)`
  width: 160px;
  height: 40px;
  font-weight: 500;
  font-size: ${TEXT_SIZE_SMALL};
  background: ${LIFELINE_ORANGE};
  color: ${WHITE_NEUTRAL};
  margin: 15px auto;
  cursor: pointer;
  border-radius: 8px;
  align-content: center;
  text-decoration: none;
  border: 1px solid ${WHITE_NEUTRAL};
  transition: all 0.5s;

  &:hover {
    background: ${WHITE_NEUTRAL};
    color: ${ORANGE};
    border: solid 2px ${ORANGE};
    box-shadow: 0 0 80px ${WHITE_NEUTRAL};
  }

  @media screen and (max-width: 1300px) {
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const LabelHead = styled.label`
  display: flex;
  color: ${WHITE_NEUTRAL};
  font-weight: 500;
  font-size: ${TEXT_SIZE_SMALL};
  width: 275px;
  height: auto;
  margin: 10px 0 10px 0;
  align-items: center;
  justify-content: space-between;
`;

export const LabelHeadText = styled.span`
  display: inline-block;
`;

export const Loading = styled.div`
  position: absolute;
  top: 90px;
  color: ${YELLOW};
  align-self: center;

  @media screen and (max-width: 1300px) {
    top: 70px;
  }
`;

export const Error = styled.div`
  position: absolute;
  top: 75px;
  color: ${RED};
  align-self: center;

  @media screen and (max-width: 1300px) {
    top: 68px;
    width: 380px;
  }
`;
