import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";
import { Link } from "react-router-dom";
import {
  TEXT_SIZE_MEDIUM,
  TEXT_SIZE_FIXED_MEDIUM,
} from "../../constants/Dimensions";

export const PageContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 2px solid ${WHITE_NEUTRAL};
  /* 8px radius because cotains box with 6px radius */
  border-radius: 8px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const MainContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  border: 2px solid ${WHITE_NEUTRAL};
  border-radius: 6px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const MainContainerChoice = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const FiltersContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px auto;
`;
export const FiltersTravel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
  }
`;
export const FilterDivision = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectTravel = styled.select`
  width: 45%;
  height: 35px;
  border-radius: 8px;
  margin: 60px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  transition: 0.3s ease;
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 30px;
    width: 70%;
    height: 35px;
  }
`;

export const ButtonPlanTravel = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: ${TEXT_SIZE_FIXED_MEDIUM};
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  margin: 50px auto;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 70%;
    height: 35px;
  }
`;

export const ButtonChoice = styled(Link)`
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: ${TEXT_SIZE_FIXED_MEDIUM};
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  margin: 50px auto;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 70%;
    height: 35px;
  }
`;

export const DataContainerTravel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const DataContainerChoice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
  @media screen and (max-width: 820px) {
    margin: 0 auto;
  }
`;

export const ImgContainerTravel = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin: 0px 20px;
  border-radius: 6px;
  @media screen and (max-width: 820px) {
    margin: 10px auto;
    width: 90%;
    height: auto;
  }
`;

export const TextContainerTravel = styled.p`
  margin: 50px 20px;
  font-size: ${TEXT_SIZE_MEDIUM};
  color: ${WHITE_NEUTRAL};
  text-align: justify;
  @media screen and (max-width: 820px) {
    margin: 5px;
  }
`;

export const TextContainerFilter = styled(TextContainerTravel)`
  text-align: center;
  margin: 10px;
`;

export const TextChoice = styled.p`
  margin: 10px;
  font-size: 22px;
  color: ${WHITE_NEUTRAL};
  text-align: left;

  @media screen and (max-width: 820px) {
    text-align: center;
    margin: 0 10px;
    font-size: 16px;
  }
`;

export const TextOrangeChoice = styled.p`
  margin: 10px;
  font-size: 22px;
  color: ${ORANGE};
  text-align: left;

  @media screen and (max-width: 820px) {
    text-align: left;
    margin: 0;
    font-size: 18px;
  }
`;
