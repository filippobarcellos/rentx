import styled from "styled-components";
import car_bg from "assets/images/car_bg.png";

export const Content = styled.div`
  width: 100%;
  max-width: 384px;
  height: 100%;
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

export const ImageContent = styled.div`
  max-width: 608px;
  height: 100%;
  display: flex;
  align-items: center;
  background-image: url(${car_bg});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Image = styled.img``;

export const Form = styled.form`
  width: 100%;
  margin-top: 42px;
  margin-bottom: 16px;

  button {
    margin-top: 24px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 3.6rem;
  color: #41414d;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grey.text};
  font-size: 1.6rem;
  max-width: 254px;
  margin-top: 24px;
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
