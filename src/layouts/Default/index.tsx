import { Header } from "shared/Header";
import { Sidebar } from "shared/Sidebar";
import * as S from "./styles";

interface DefaultLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
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
