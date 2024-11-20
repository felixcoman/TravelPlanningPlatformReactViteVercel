import styled from "styled-components";
import { WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM } from "../../constants/Dimensions";
import { ButtonInfo, InfoUser } from "../Explore/Explore.style";

export const AccountContainer = styled.div`
  display: flex;
  margin: 30px 0;
  padding: 10px;
  gap: 5px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

export const AccountText = styled.h1`
  margin: 10px 0;
  color: ${WHITE_NEUTRAL};
  font-size: ${TEXT_SIZE_MEDIUM};
`;

export const AccountLabel = styled.p`
  width: 45%;
  padding: 1px;
  margin: 10px 0;
  color: ${WHITE_NEUTRAL};
  text-align: left;
`;
export const AccountInput = styled.input`
  width: 45%;
  height: 40px;
  margin: 10px 0;
  border-radius: 5px;
`;

export const AccountActionButton = styled(ButtonInfo)`
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
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.split == "true" ? "50%" : "unset")};

  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`;
export const InputContainerAccount = styled.div`
  display: flex;
  font-size: 15px;
  width: 100%;
  height: ${(props) => (props.split == "true" ? "50%" : "unset")};
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

// USERS display page

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

export const InfoSectionUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayUser = styled(InfoUser)`
  margin: 10px 0;
`;

export const ButtonUser = styled(ButtonInfo)`
  width: 100%;
`;
