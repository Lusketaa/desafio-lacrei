import styled from 'styled-components';
import logo from '../../assets/logo.svg';

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
  background-position: center; /* Centraliza a imagem */
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
`

export const ButtonBase = styled.button`
  background-color: #018762;
  color: #ffffff;
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
    background-color: #0b9a71;
  }
`;

export const NavButton = styled.a`
  color: #018762;
  background-color: #ffffff;
  padding: 10px 32px;
  border-radius: 8px;

  font-size: 18px;
  line-height: 27px;
  font-weight: 700;

  cursor: pointer;
  transition: linear .3s;

  &:hover {
    color: #0b9a71;
  }
`;