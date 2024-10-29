import styled from "styled-components";

//section is important for providing controled top padding to ensure that navbar is not hiding content underneath

export const MainSection = styled.section`
  padding-top: 15vh;
  @media screen and (max-width: 900px) {
    padding-top: 17vh;
    height: 79vh;
  }

  @media screen and (max-width: 320px) {
    height: 85vh;
  }
`;
