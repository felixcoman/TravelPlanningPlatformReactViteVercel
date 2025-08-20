import styled from "styled-components";

//section is important for providing controled top padding to ensure that navbar is not hiding content underneath

export const MainSection = styled.section`
  padding-top: ${({ navbarheight }) => navbarheight}px;
  padding-bottom: ${({ footerheight }) => footerheight}px;
  @media screen and (min-width: 440px) and (max-width: 900px) {
    padding-top: ${({ navbarheight }) => `${navbarheight + 36}px`};
  }
`;
