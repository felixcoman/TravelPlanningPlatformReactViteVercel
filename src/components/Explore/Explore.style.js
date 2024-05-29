import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_BLUE, WHITE_NEUTRAL } from "../../constants/Colors";

export const Title = styled.h1`
  color: ${WHITE_NEUTRAL};
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  text-align: left;
  color: ${WHITE_NEUTRAL};
`;

export const CountrySubtitle = styled(Subtitle)`
  text-transform: capitalize;
`;

export const CityDescription = styled.h3`
  font-size: 20px;
  color: ${WHITE_NEUTRAL};
  text-align: justify;
`;

export const SectionCityData = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
`;

export const SectionLandmarkData = styled.section`
  display: grid;
  margin: 50px 0;
`;

export const SectionCityButtons = styled.section`
  display: flex;
  flex-direction: row;
  margin: 50px 0;
`;

export const ButtonLandmark = styled(Link)`
  background: ${DARK_BLUE};
  color: ${WHITE_NEUTRAL};
  width: 100%;
  padding: 6px 12px;
  margin: 2px 0;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
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
