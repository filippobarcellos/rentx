import { Base } from "../Base";

import * as S from "./styles";

type AuthProps = {
  subTitle: string;
  text: string;
  children: React.ReactNode;
  img: string;
};

const Auth = ({ subTitle, text, children, img }: AuthProps) => {
  return (
    <Base title="Profile">
      <>
        <S.ImageContent>
          <S.Image src={img} alt="audi car" />
        </S.ImageContent>
        <S.Content>
          <S.SubTitle>{subTitle}</S.SubTitle>
          <S.Text>{text}</S.Text>
          {children}
        </S.Content>
      </>
    </Base>
  );
};

export { Auth };
