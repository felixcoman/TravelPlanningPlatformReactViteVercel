import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM } from "../../constants/Dimensions";

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-left: 20px;
  border-radius: 50%;
`;

// using a fixed navbar with responsive height - needs same top padding in main section
export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 15vh;
  align-content: center;
  background-color: ${DARK_BLUE};

  @media screen and (max-width: 900px) {
    height: 17vh;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  padding: 15px 15px;
  height: auto;
  margin: auto;
  background-color: transparent;
  color: ${WHITE_NEUTRAL};
`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${ORANGE};
  padding: 8px;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
  &:hover {
    background: ${WHITE_NEUTRAL};
    color: ${DARK_BLUE};
    border-radius: 0;
  }
  @media screen and (max-width: 900px) {
    color: ${DARK_BLUE};
    margin: 0 auto;
    height: fit-content;
  }
`;

export const LinkContainer = styled.div`
  background: ${WHITE_NEUTRAL};
  display: flex;
  flex-direction: row;
  width: 100%;
  /* min-width: max-content; */
  position: absolute;
  top: 75px;
  left: 0;
  z-index: 1;
  /* 
  @media screen and (max-width: 440px) {
    flex-direction: column;
    left: auto;
    right: 0px;
    width: max-content;
  } */
  @media screen and (max-width: 440px) {
    background: rgba(255, 255, 255, 0.8);
    flex-direction: column;
    width: 100%;
    position: relative;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 60px;
  right: 0;
  display: none;
  border-radius: 8px;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const LinkContainerDesktop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
  font-size: ${TEXT_SIZE_MEDIUM};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  color: ${WHITE_NEUTRAL};
  display: none;
  padding: 0px;
  margin: 10px;
  border: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const IconBox = styled.span`
  padding: 8px;
  height: auto;
  /* margin: 10px; */
  min-width: 100px;
`;

export const Icon = styled.i`
  padding: 8px;
`;

export const BadgeBox = styled.span`
  display: none;
  padding: 8px;
  @media screen and (max-width: 900px) {
    display: block;
    min-width: 65px;
  }
`;

export const AlertWrap = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 440px) {
    flex-direction: column;
  }
`;
