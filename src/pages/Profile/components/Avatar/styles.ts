import styled from "styled-components";

export const Avatar = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 40px;
  position: relative;

  img {
    max-width: 100%;
    border-radius: 50%;
  }

  button {
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;
