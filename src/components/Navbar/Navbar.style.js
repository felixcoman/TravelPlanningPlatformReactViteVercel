import {Link} from "react-router-dom";
import styled from "styled-components";
import { WHITE_NEUTRAL,DARK_BLUE, ORANGE } from "../../constants/Colors";


export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-top:5px;
  margin-left:20px;
  border-radius: 50%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
  background-color:  ${DARK_BLUE} ;
  color:  ${WHITE_NEUTRAL};
  width: 100%;
  height: 60px;
  margin-bottom:50px;
`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${ORANGE} ;
  padding: 8px ;
  margin:10px ;
  border-radius:4px;
  &:hover {
    background:  ${WHITE_NEUTRAL};
    color:  ${DARK_BLUE};
    border-radius: 0;
  }
  @media screen and (max-width: 820px) {
    color: ${DARK_BLUE};
    margin:0 auto;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  background:  ${WHITE_NEUTRAL};
  width: 90%;
  margin:30px auto;

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
  border-radius:8px;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
  font-size:18px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  color: ${WHITE_NEUTRAL} ;
  display: none;
  padding:0px;
  margin:10px;
  border:none;
  
  @media screen and (max-width: 820px) {
    display: block;
  }
`;