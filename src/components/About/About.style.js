import styled from "styled-components";
import {
  GRADIENT_BLUE_LIGHT,
  ORANGE,
  WHITE_NEUTRAL,
} from "../../constants/Colors";

export const MainAbout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: clamp(15px, 2vw, 22px);
`;

export const SliderImg = styled.img`
  width: 66vw;
  height: auto;

  @media screen and (min-width: 1024px) {
    width: 50vw;
  }
`;

export const AboutText = styled.p`
  color: ${WHITE_NEUTRAL};
  width: 70vw;
  margin: 15px auto;
  text-align: justify;
`;

export const AboutTextCenter = styled(AboutText)`
  text-align: center;
  color: ${GRADIENT_BLUE_LIGHT};
`;

export const AboutTitle = styled.h1`
  color: ${ORANGE};
`;
