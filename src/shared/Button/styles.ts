import styled, { css, DefaultTheme } from "styled-components";

interface ContainerProps {
  color: "primary" | "success" | "outline";
}

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: #ffffff;

    &:hover {
      background: #b2122c;
    }
  `,
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};

    &:hover {
      background: #038a3f;
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background: transparent;
    border: 1px solid ${theme.colors.grey.black};
    color: ${theme.colors.grey.title};
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, color }) => css`
    width: 100%;
    max-width: 384px;
    height: 64px;
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;

    ${!!color && buttonModifiers[color](theme)}

    &:disabled {
      opacity: 0.5;
    }
  `}
`;
