import styled from "styled-components";
import { ORANGE, RED, WHITE_NEUTRAL, YELLOW } from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";
import { ButtonInfo } from "../Explore/Explore.style";

export const ContactContainer = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 5px;
  height: fit-content;
  gap: 5px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactText = styled.h1`
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_MEDIUM};
`;

export const ContactLabel = styled.p`
  font-size: ${TEXT_SIZE_SMALL};
  color: ${WHITE_NEUTRAL};
  width: 65%;
  max-width: 1440px;
  margin: 5px auto;
  text-align: left;
  @media screen and (orientation: landscape) and (min-width: 1000px) {
    width: 45%;
  }
`;
export const ContactInput = styled.input`
  font-size: ${TEXT_SIZE_SMALL};
  font-style: italic;
  width: 70%;
  max-width: 1440px;
  height: 40px;
  margin: 5px auto;
  border-radius: 5px;
  @media screen and (orientation: landscape) and (min-width: 1000px) {
    width: 50%;
  }
`;

export const ContactTextarea = styled.textarea`
  font-size: ${TEXT_SIZE_SMALL};
  font-style: italic;
  width: 70%;
  max-width: 1440px;
  height: 100px;
  margin: 5px auto;
  border-radius: 5px;
  resize: none;
  @media screen and (orientation: landscape) and (min-width: 1000px) {
    width: 50%;
  }
`;

export const ContactButton = styled(ButtonInfo)`
  width: 70%;
  margin: 20px 5px;
  @media screen and (orientation: landscape) and (min-width: 1000px) {
    width: 50%;
  }
`;

export const Error = styled.div`
  z-index: 10;
  color: ${RED};
  width: 100%;
  align-self: center;
  font-size: ${TEXT_SIZE_MEDIUM};
`;

export const Loading = styled.div`
  z-index: 10;
  display: flex;
  color: ${YELLOW};
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: ${TEXT_SIZE_MEDIUM};
`;
