import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 86px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  button {
    max-width: 292px;
    height: 80px;
  }
`;

export const Logo = styled.img`
  max-width: 200px;
  height: 22px;
`;

export const Title = styled.h1`
  font-size: 52px;
  line-height: 54px;
  color: #ffffff;
  margin: 140px 0 32px 0;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 64px;
  max-width: 360px;
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 608px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 600px;
`;
