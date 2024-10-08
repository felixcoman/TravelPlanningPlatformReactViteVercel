import styled from "styled-components";
import {
  ORANGE,
  WHITE_NEUTRAL,
  GRADIENT_BLUE_LIGHT,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM } from "../../constants/Dimensions";

export const MainAbout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: ${TEXT_SIZE_MEDIUM};
`;

export const SliderImg = styled.img`
  width: 50%;
  height: auto;
`;

export const AboutText = styled.p`
  color: ${WHITE_NEUTRAL};
  width: 70vw;
  margin: 30px auto;
  text-align: justify;
`;

export const AboutTextCenter = styled(AboutText)`
  text-align: center;
  color: ${GRADIENT_BLUE_LIGHT};
`;

export const AboutTitle = styled.h1`
  color: ${ORANGE};
`;
