import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";

export const ContactContainer = styled.div`
  display: flex;
 
  margin: 30px 0;
  padding: 64px;
  height: 100%;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
`;


export const ContactText = styled.h4`
  color: ${WHITE_NEUTRAL};
`;

export const ContactLabel = styled.p`
  font-size: large;
  width: 50%;
  margin: 12px auto ;
  color: ${WHITE_NEUTRAL};
  text-align:left;
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
  margin: 10px auto;
`;

export const ContactButton = styled.button`
  max-width: 200px;
  width: 100%;
  height: 30px;
  margin: 12px auto;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: 1px solid ${WHITE_NEUTRAL};
  }
`;

export const ErrorP = styled.p`
  color: ${ORANGE};
  width: 100%;
`;
