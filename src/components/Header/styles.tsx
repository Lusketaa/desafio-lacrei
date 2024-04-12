import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { colors, breakpoints } from '../../styles/Variables';

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    
`;

export const Logo = styled.a`
  width: 200px;
  height: 48px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; 
  cursor: pointer;
  transition: linear .3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  };
`

export const HamburguerMenu = styled.div`
  display: none;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  };
`

export const NavMenuMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const NavMenuContent = styled.div`
  background-color: ${colors.white}; 
  width: 100%;
  height: 100vh;

  padding: 100px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 20px;
`;

export const ButtonBase = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 10px 32px;
  border-radius: 8px;

  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  
  cursor: pointer;
  transition: linear .3s;
  box-shadow: 0px 5px 10px 0px #0000004D;

  &:hover {
    background-color: ${colors.primaryLight};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  };
`;

export const NavButton = styled.a`
  color: ${colors.primary};
  background-color: ${colors.white};
  padding: 10px 32px;
  border-radius: 8px;

  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  text-decoration: none;

  cursor: pointer;
  transition: linear .3s;

  &:hover {
    color: ${colors.primaryLight};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    text-align: center;
  };
  
`;

