import { Wrapper, Logo, Nav, ButtonBase, NavButton } from './styles';

export default function Header () {
  return (
    <Wrapper>
      <Logo />
      <Nav>
        <NavButton>Quem somos</NavButton>
        <NavButton>Ajuda</NavButton>
        <ButtonBase>Entrar</ButtonBase>
      </Nav>
    </Wrapper>
  );
}
