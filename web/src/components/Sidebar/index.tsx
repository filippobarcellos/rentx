import { UserIcon } from "shared/components/Icons/User";
import { HomeIcon } from "shared/components/Icons/Home";
import { CarIcon } from "shared/components/Icons/Car";

import Logo from "assets/images/logo.png";
import * as S from "./styles";

export const Sidebar = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={Logo} alt="rentx" />
      </S.LogoContainer>
      <S.Content>
        <S.Nav>
          <S.NavList>
            <S.NavItem>
              <HomeIcon />
            </S.NavItem>
            <S.NavItem>
              <CarIcon />
            </S.NavItem>
            <S.NavItem isActive>
              <UserIcon color="#ffffff" />
            </S.NavItem>
          </S.NavList>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};
