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
  width: 50%;
  margin: 5px auto;
  text-align: left;
`;
export const ContactInput = styled.input`
  width: 50%;
  height: 40px;
  margin: 5px auto;
  border-radius: 5px;
`;

export const ContactTextarea = styled.textarea`
  width: 50%;
  height: 100px;
  margin: 5px auto;
`;

export const ContactButton = styled(ButtonInfo)`
  width: 50%;
  margin: 20px 5px;
`;

export const Error = styled.div`
  color: ${RED};
  width: 100%;
  align-self: center;
`;

export const Loading = styled.div`
  display: flex;
  color: ${YELLOW};
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
`;
