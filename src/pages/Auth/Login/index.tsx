import { useHistory } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "shared/Input";
import { Button } from "shared/Button";

import Audi from "assets/images/audi_large.png";

import * as S from "../styles";
import { DefaultLayout } from "layouts/Default";

export const Login = () => {
  const history = useHistory();

  const handleForgotPassword = () => {
    history.push("/password/forgot");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <DefaultLayout title="Profile">
      <S.ImageContent>
        <S.Image src={Audi} alt="audi model" />
      </S.ImageContent>
      <S.Content>
        <S.SubTitle>We are almost there.</S.SubTitle>
        <S.Text>Login to start a awesome experience.</S.Text>

        <S.Form>
          <Input
            name="email"
            type="text"
            placeholder="E-mail"
            iconLeft={FiMail}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            iconLeft={FiLock}
          />
          <S.LinkForgotPassword onClick={handleForgotPassword}>
            Forgot my password
          </S.LinkForgotPassword>
          <Button type="submit" color="primary" disabled>
            Login
          </Button>
        </S.Form>
        <Button color="outline" onClick={handleRegister}>
          Register
        </Button>
      </S.Content>
    </DefaultLayout>
  );
};
