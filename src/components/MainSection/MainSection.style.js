import styled from "styled-components";

//section is important for providing controled top padding to ensure that navbar is not hiding content underneath

export const MainSection = styled.section`
  padding-top: 15vh;
  padding-bottom: 15vh;

  @media screen and (max-width: 1600px) {
    padding-bottom: 15vh;
  }
  @media screen and (max-width: 1600px) and (max-height: 1000px) {
    padding-top: 14vh;
    padding-bottom: 15vh;
  }
  @media screen and (max-width: 1300px) and (max-height: 900px) {
    padding-top: 14vh;
    padding-bottom: 14vh;
  }
  @media screen and (max-width: 900px) {
    padding-top: 30vh;
  }
  @media screen and (max-width: 900px) and (max-height: 1300px) {
    padding-top: 18vh;
  }
  @media screen and (max-width: 900px) and (max-height: 400px) {
    padding-top: 30vh;
    padding-bottom: 23vh;
  }
  @media screen and (max-width: 600px) {
    padding-top: 24vh;
  }
  @media screen and (max-width: 600px) and (max-height: 1300px) {
    padding-top: 17vh;
  }
  @media screen and (max-width: 600px) and (max-height: 800px) {
    padding-top: 15vh;
    padding-bottom: 15vh;
  }
  @media screen and (max-width: 440px) {
    padding-top: 32vh;
    padding-bottom: 23vh;
  }
  @media screen and (max-width: 440px) and (max-height: 1000px) {
    padding-top: 14vh;
    padding-bottom: 23vh;
  }
  @media screen and (max-width: 440px) and (max-height: 900px) {
    padding-top: 17vh;
    padding-bottom: 23vh;
  }
  @media screen and (max-width: 440px) and (max-height: 800px) {
    padding-top: 22vh;
    padding-bottom: 23vh;
  }
  @media screen and (max-width: 440px) and (max-height: 600px) {
    padding-top: 30vh;
    padding-bottom: 25vh;
  }
  @media screen and (max-width: 280px) {
    padding-top: 51vh;
    padding-bottom: 32vh;
  }
`;
