import { FiMail } from "react-icons/fi";

import { Input } from "shared/Input";
import { Button } from "shared/Button";

import Audi from "assets/images/audi_large.png";

import * as S from "../styles";
import { DefaultLayout } from "layouts/Default";

export const ForgotPassword = () => {
  return (
    <DefaultLayout title="Profile">
      <S.ImageContent>
        <S.Image src={Audi} alt="audi model" />
      </S.ImageContent>
      <S.Content>
        <S.SubTitle>Forgot my password.</S.SubTitle>
        <S.Text>
          You are going to receive a link in your e-mail to recover your
          pasword.
        </S.Text>

        <S.Form>
          <Input
            name="email"
            type="text"
            placeholder="E-mail"
            iconLeft={FiMail}
          />
          <Button type="submit" color="primary" disabled>
            Send
          </Button>
        </S.Form>
      </S.Content>
    </DefaultLayout>
  );
};
