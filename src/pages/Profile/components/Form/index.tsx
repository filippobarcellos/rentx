import { FiLock } from "react-icons/fi";

import { Input } from "shared/components/Input";
import { Button } from "shared/Button";

import * as S from "./styles";

export const ProfileForm = () => {
  return (
    <S.Form>
      <Input name="password" iconLeft={FiLock} placeholder="Password" />
      <Input name="newPassword" iconLeft={FiLock} placeholder="New Password" />
      <Input
        name="passwordConfirmation"
        iconLeft={FiLock}
        placeholder="Password Confirmation"
      />
      <Button>Update</Button>
    </S.Form>
  );
};
