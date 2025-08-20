import styled from "styled-components";
import { ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const TitleAccomm = styled.h1`
  width: 100%;
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_MEDIUM};
  padding: 5px;
  margin-bottom: 5vh;
  align-self: center;
`;

export const AccommodationMain = styled.section`
  position: relative;
  width: 100%;
  @media screen and (max-width: 440px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }
`;

export const Sidebar = styled.aside`
  background: ${WHITE_NEUTRAL};
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 10vw;
  overflow-x: hidden;
  padding: 8px 0;
  height: 100%;
  border-radius: 6px;
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1440px) {
    width: 15vw;
  }
  @media screen and (max-width: 840px) {
    width: 25vw;
  }
  @media screen and (max-width: 700px) {
    position: static;
    width: 100%;
  }
`;

export const LocationTitle = styled.div`
  background: ${WHITE_NEUTRAL};
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_SMALL};
`;

export const PlaceholderAcc = styled.section`
  background: ${WHITE_NEUTRAL};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: calc(10vw + 1vw);
  height: 63vh;
  padding: 0px 10px;
  border-radius: 6px;

  @media screen and (max-width: 1600px) {
    height: 55vh;
  }
  @media screen and (max-width: 1440px) {
    margin-left: calc(15vw + 1vw);
    height: 50vh;
  }
  @media screen and (max-width: 840px) {
    margin-left: calc(25vw + 1vw);
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
`;

export const DisplayContainer = styled.section`
  margin-left: calc(10vw + 1vw);
  padding: 0px 10px;
  height: 100%;
  border: 2px solid ${WHITE_NEUTRAL};
  border-radius: 6px;

  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1440px) {
    margin-left: calc(15vw + 1vw);
    width: calc(100% - 17vw);
  }
  @media screen and (max-width: 840px) {
    margin-left: calc(25vw + 1vw);
    width: calc(100% - 27vw);
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
`;

export const ItemLink = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const AccommodationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const AccommodationDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: ${WHITE_NEUTRAL};
  margin: 10px 0;
`;

export const HighlightText = styled.strong`
  margin: 10px 0;
`;
export const Iframe = styled.iframe`
  height: 50vh;
`;
