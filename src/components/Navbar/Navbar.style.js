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

export const NavbarContainer = styled.div`
  /* height: 60px; */
  /* margin-bottom: 50px; */
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  width: 100%;
  padding: 15px 15px;
  height: 15vh;
  background-color: ${DARK_BLUE};
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
  @media screen and (max-width: 820px) {
    color: ${DARK_BLUE};
    margin: 0 auto;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${WHITE_NEUTRAL};
  width: 90%;
  margin: 30px auto;
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

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const IconBox = styled.span`
  width: 400px;
  padding: 8px;
  height: 50px;
  margin: 10px;
`;

export const Icon = styled.i`
  padding: 8px;
`;
