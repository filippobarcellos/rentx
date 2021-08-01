import { Link } from "react-router-dom";
import { UserIcon } from "shared/Icons/User";

import * as S from "./styles";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Group>
          <Link to="/">
            <S.InfoText>Faça Login</S.InfoText>
          </Link>
          <S.GroupIcon>
            <UserIcon />
          </S.GroupIcon>
        </S.Group>
      </S.Content>
    </S.Container>
  );
};
