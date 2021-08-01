import styled from "styled-components";
import modal_bg from "assets/images/modal_bg.png";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Container = styled.div`
  width: 400px;
  height: 448px;
  background: ${(props) => props.theme.colors.shapes.black};
  background-image: url(${modal_bg});
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 64px 40px;
`;

export const Image = styled.img`
  width: 78px;
  height: 56px;
`;

export const Title = styled.h3`
  font-size: 36px;
  color: #ffffff;
  margin-top: 48px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.grey.text};
  margin-top: 16px;
`;

export const ConfirmationButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  padding: 22px 46px;
  background-color: ${(props) => props.theme.colors.grey.title};
  margin-top: 40px;
`;
