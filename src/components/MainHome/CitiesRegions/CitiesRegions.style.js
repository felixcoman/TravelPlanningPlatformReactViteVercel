import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../../constants/Colors";
import {
  TEXT_SIZE_MEDIUM,
  TEXT_SIZE_FIXED_MEDIUM,
} from "../../../constants/Dimensions";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 2px solid ${WHITE_NEUTRAL};
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 50px auto;
  border: 2px solid ${WHITE_NEUTRAL};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

export const Text = styled.h4`
  margin: 20px auto;
  color: ${ORANGE};
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const ImgContainer = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  @media screen and (max-width: 820px) {
    margin: 10px auto;
  }
`;

export const ImgWrapperPlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.p`
  margin: 50px;
  font-size: ${TEXT_SIZE_MEDIUM};
  color: ${WHITE_NEUTRAL};
  text-align: justify;
`;

export const ButtonPlan = styled.button`
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
    height: 25p;
  }
`;

export const SelectCity = styled.select`
  width: 75%;
  height: 35px;
  border-radius: 8px;
  margin: 70px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  transition: 0.3s ease;
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
`;

export const SelectRegion = styled.select`
  width: 75%;
  height: 35px;
  border-radius: 8px;
  margin: 70px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
`;
