import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";
import { Link } from "react-router-dom";
import { ButtonInfo } from "../Explore/Explore.style";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const ContactContainer = styled.div`
  display: flex;
  margin: 30px 0;
  padding: 10px;
  height: 100%;
  gap: 15px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

export const ContactText = styled.h1`
  margin: 10px 0;
  color: ${WHITE_NEUTRAL};
  font-size: ${TEXT_SIZE_MEDIUM};
`;

export const ContactLabel = styled.p`
  width: 45%;
  padding: 1px;
  margin: 10px 0;
  color: ${WHITE_NEUTRAL};
  text-align: left;
`;
export const ContactInput = styled.input`
  width: 45%;
  height: 40px;
  margin: 10px 0;
  border-radius: 5px;
`;

export const ContactTextarea = styled.textarea`
  width: 50%;
  height: 100px;
  margin: 10px auto;
`;

export const ContactButton = styled(ButtonInfo)`
  width: 45%;
`;

export const AccountSection = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

export const ButtonsContainerAccount = styled.div`
  width: 100%;
`;
export const InputContainerAccount = styled.div`
  display: flex;
  font-size: 15px;
  width: 100%;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;
