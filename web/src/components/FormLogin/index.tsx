import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";

import { useAuth } from "context/Auth";
import { Input } from "components/Input";
import { Button } from "components/Button";

import * as S from "./styles";

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(5).required(),
});

export const FormLogin = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const navigateToForgotPassword = () => {
    history.push("/password/forgot");
  };

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(data);
      history.push("/cars");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="E-mail"
        iconLeft={FiMail}
        {...register("email")}
        isFilled={!!watch("email")}
      />
      <Input
        type="password"
        placeholder="Password"
        iconLeft={FiLock}
        {...register("password")}
        isFilled={!!watch("password")}
      />

      <S.LinkForgotPassword onClick={navigateToForgotPassword}>
        Forgot my password
      </S.LinkForgotPassword>
      <Button type="submit" color="primary" disabled={!isValid}>
        Login
      </Button>
    </S.Form>
  );
};
