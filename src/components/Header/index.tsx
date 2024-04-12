import { useState } from 'react';
import { Wrapper, Logo, Nav, HamburguerMenu, NavMenuMobile, NavMenuContent, ButtonBase, NavButton } from './styles';
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Wrapper>
      <Logo />
      <HamburguerMenu>
        {isOpenMenu ? (
          <IoClose 
            size={32}
            onClick={toggleMenu} 
            style={{zIndex: 999, color: '#018762'}}
          />
        ) : (
          <MdMenu
            size={32}
            onClick={toggleMenu}
            style={{zIndex: 999, color: '#018762' }} 
          />
        )}
      </HamburguerMenu>
      {isOpenMenu && (
        <NavMenuMobile>
          <NavMenuContent>
            <NavButton href='/'>Quem somos</NavButton>
            <NavButton href='/'>Ajuda</NavButton>
            <ButtonBase>Entrar</ButtonBase>
          </NavMenuContent>
        </NavMenuMobile>
      )}
      <Nav>
        <NavButton href='/'>Quem somos</NavButton>
        <NavButton href='/'>Ajuda</NavButton>
        <ButtonBase>Entrar</ButtonBase>
      </Nav>
    </Wrapper>
  );
}