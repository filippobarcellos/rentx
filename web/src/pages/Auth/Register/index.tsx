/* eslint-disable no-lone-blocks */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye } from "react-icons/fi";

import { Input } from "shared/components/Input";
import { Button } from "shared/Button";
import { Modal } from "shared/components/Modal";
import { DefaultLayout } from "layouts/Default";

import Car from "assets/images/car_red.png";

import * as S from "../styles";
import { useAuth } from "context/Auth";

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    iconLeft: FiMail,
  },
  {
    name: "email",
    type: "text",
    placeholder: "E-mail",
    iconLeft: FiMail,
  },
  {
    name: "document",
    type: "text",
    placeholder: "Document",
    iconLeft: FiMail,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    iconLeft: FiLock,
    iconRight: FiEye,
  },
  {
    name: "password_confirmation",
    type: "password",
    placeholder: "Confirm password",
    iconLeft: FiLock,
    iconRight: FiEye,
  },
];

interface FormData {
  name: string;
  email: string;
  document: string;
  password: string;
  password_confirmation: string;
}

export const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, watch } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <DefaultLayout title="Profile">
        <S.Content>
          <S.SubTitle>Sign up</S.SubTitle>
          <S.Text>Register to enjoy great cars.</S.Text>

          <S.Form onSubmit={onSubmit}>
            {inputs.map((input) => (
              <Input
                key={input.name}
                {...input}
                {...register(input.name as any)}
                isFilled={watch(input.name as any)}
              />
            ))}
            <Button color="primary" onClick={() => setIsModalOpen(true)}>
              Register
            </Button>
          </S.Form>
        </S.Content>
        <S.ImageContent>
          <S.Image src={Car} alt="audi model" />
        </S.ImageContent>
      </DefaultLayout>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
