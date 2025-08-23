import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BLUE,
  GRADIENT_BLUE_DARK,
  GRADIENT_BLUE_LIGHT,
  GRADIENT_BLUE_MIDDLE,
  LIFELINE_ORANGE,
  ORANGE,
  RED,
  WHITE_NEUTRAL,
  YELLOW,
} from "../../constants/Colors";
import {
  TEXT_SIZE_SMALL,
  TEXT_SIZE_FIXED_SMALL,
} from "../../constants/Dimensions";

export const SectionMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: grid;
  height: 600px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin: 10px 20px;

  @media screen and (max-width: 2300px) {
    height: 400px;
  }

  @media screen and (max-width: 1800px) {
    height: 360px;
  }

  @media screen and (max-width: 1600px) {
    height: 340px;
  }
  @media screen and (max-width: 1300px) {
    height: auto;
  }

  @media screen and (max-width: 425px) {
    display: none;
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
  @media screen and (max-width: 2300px) {
    width: 200px;
  }
  @media screen and (max-width: 1800px) {
    width: 180px;
  }
  @media screen and (max-width: 1600px) {
    width: 168px;
  }

  @media screen and (max-width: 1300px) {
    width: 150px;
  }

  @media screen and (max-width: 840px) {
    width: 90px;
  }

  @media screen and (max-width: 425px) {
    width: 70px;
  }
`;

export const MainButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: relative;

  @media screen and (max-width: 1600px) {
    justify-content: center;
  }

  @media screen and (max-width: 1300px) {
    width: 350px;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  margin: 15px auto;
  height: auto;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1300px) {
    margin: 10px auto;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  height: ${(props) => (props.expanded == "true" ? "200px" : "unset")};
`;

export const Buttons = styled.button`
  width: 200px;
  height: 70px;
  font-weight: 500;
  font-size: ${TEXT_SIZE_FIXED_SMALL};
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

  /* props for personalization of buttons in account page */
  @media screen and (max-width: 1300px) {
    width: ${(props) => (props.variant === "account" ? "200px" : "300px")};
    height: ${(props) => (props.variant === "account" ? "70px" : "auto")};
    margin: ${(props) => (props.variant === "account" ? "5px 5px" : "5px 0px")};
  }

  @media screen and (max-width: 840px) {
    width: ${(props) => (props.variant === "account" ? "200px" : "100%")};
  }

  @media screen and (max-width: 540px) {
    height: auto;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  margin: 25px 30px auto;
  position: absolute;
  top: 110px;
  height: ${(props) => (props.expanded == "true" ? "200px" : "unset")};

  @media screen and (max-width: 1300px) {
    top: 100px;
  }

  @media screen and (max-width: 840px) {
    top: 85px;
  }
  @media screen and (max-width: 370px) {
    top: 110px;
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
  font-size: ${TEXT_SIZE_FIXED_SMALL};
  background: ${GRADIENT_BLUE_LIGHT};

  @media screen and (max-width: 1300px) {
    height: 24.5px;
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
  font-size: ${TEXT_SIZE_FIXED_SMALL};
  background: ${GRADIENT_BLUE_LIGHT};

  @media screen and (max-width: 1300px) {
    height: 24.5px;
  }

  @media screen and (max-width: 840px) {
    margin-top: 20px;
    width: 90%;
  }
`;

export const Option = styled.option`
  font-weight: 500;
  font-size: ${TEXT_SIZE_FIXED_SMALL};
  border-radius: 8px;
`;

export const HomeBtn = styled(Link)`
  width: 160px;
  height: 40px;
  font-weight: 500;
  font-size: ${TEXT_SIZE_FIXED_SMALL};
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

  @media screen and (max-width: 840px) {
    width: 70%;
  }

  @media screen and (max-width: 425px) {
    margin: 5 auto;
  }
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
`;
export const LabelHead = styled.label`
  display: flex;
  color: ${WHITE_NEUTRAL};
  font-weight: 500;
  font-size: ${TEXT_SIZE_FIXED_SMALL};
  width: 275px;
  height: auto;
  margin: 10px 0 10px 0;
  align-items: center;
  justify-content: space-between;
`;

export const LabelHeadText = styled.span`
  display: inline-block;
`;

export const LoadingHome = styled.div`
  display: flex;
  position: absolute;
  top: 90px;
  color: ${YELLOW};
  align-self: center;
  align-items: center;
`;

export const ErrorHome = styled.div`
  position: absolute;
  top: 83px;
  color: ${RED};
  align-self: center;

  @media screen and (max-width: 1300px) {
    top: 76px;
    width: 380px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
