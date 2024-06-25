import styled from "styled-components";
import { WHITE_NEUTRAL } from "../../constants/Colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  /* padding: 10px; */
  padding-bottom: 10px;
  height: 70vh;

  @media screen and (max-width: 1600px) {
    flex-direction: row;
    justify-content: center;
  }
`;
