import { InputHTMLAttributes, forwardRef, useState } from "react";
import { IconType } from "react-icons";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: IconType;
  iconRight?: IconType;
  isFilled?: boolean;
}

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ iconLeft: IconLeft, iconRight: IconRight, isFilled, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const onInputFocus = () => {
      setIsFocused(true);
    };

    const onInputBlur = () => {
      setIsFocused(false);
    };

    return (
      <S.Container>
        {IconLeft && (
          <S.IconGroup isFocused={isFocused} isFilled={isFilled}>
            <IconLeft />
          </S.IconGroup>
        )}

        <S.Input
          ref={ref}
          {...rest}
          onFocus={onInputFocus}
          onBlurCapture={onInputBlur}
        />

        {IconRight && (
          <S.IconGroupRight>
            <IconRight />
          </S.IconGroupRight>
        )}
      </S.Container>
    );
  };

export const Input = forwardRef(InputBase);
