import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  min-width: 290px;
  height: 70vh;
  min-height: 780px;

  @media screen and (max-width: 1600px) {
    min-height: unset;
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    height: auto;
  }
`;
