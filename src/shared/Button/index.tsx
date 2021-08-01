import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "success" | "outline";
}

export const Button = ({
  children,
  color = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <S.Container color={color} {...rest}>
      {children}
    </S.Container>
  );
};
