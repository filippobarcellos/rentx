import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";

import * as S from "./styles";

interface BaseProps {
  title: string;
  children: React.ReactNode;
}

export const Base = ({ title, children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Container>
        <Header title={title} />
        <S.Main>{children}</S.Main>
      </S.Container>
    </S.Wrapper>
  );
};
