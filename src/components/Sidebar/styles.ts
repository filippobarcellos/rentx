import styled, { css } from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  width: 80px;

  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  height: 80px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.black};
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

interface NavItemProps {
  isActive?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 54px;
    background: ${isActive && "#000000"};
    cursor: pointer;
    margin-bottom: 24px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      height: 100%;
      width: 3px;
      background: ${isActive && theme.colors.primary};
    }
  `}
`;
