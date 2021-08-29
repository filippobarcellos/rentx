import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  margin-top: 42px;
  margin-bottom: 16px;

  button {
    margin-top: 24px;
  }
`;

export const LinkForgotPassword = styled.a`
  color: ${(props) => props.theme.colors.grey.text};
  font-size: 1.6rem;
  transition: color 0.2s;
  display: block;
  margin-top: 24px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;
