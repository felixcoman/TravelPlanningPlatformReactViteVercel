import styled from "styled-components";
import { ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_FIXED_MEDIUM } from "../../constants/Dimensions";

export const MainContainerRecommend = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid ${WHITE_NEUTRAL};
  border-radius: 6px;
`;

export const DataContainerRecommend = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const TextContainerRecommend = styled.p`
  margin: 20px 0;
  padding: 10px;
  font-size: ${TEXT_SIZE_FIXED_MEDIUM};
  color: ${WHITE_NEUTRAL};
  text-align: left;
  @media screen and (max-width: 820px) {
    text-align: left;
    margin: 0;
    font-size: 16px;
  }
`;

export const TextRecommend = styled.p`
  margin: 20px 0;
  font-size: 22px;
  color: ${ORANGE};
  text-align: left;
  padding: 10px;
  @media screen and (max-width: 820px) {
    text-align: left;
    margin: 0;
    font-size: 18px;
  }
`;
