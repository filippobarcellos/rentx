import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 64px;
  width: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.grey.primary};

  & + div {
    margin-top: 8px;
  }
`;

interface IconGroupProps {
  isFocused?: boolean;
  isFilled?: boolean;
}

export const IconGroup = styled.div<IconGroupProps>`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid ${(props) => props.theme.colors.grey.primary};

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) =>
      props.isFocused || props.isFilled ? "#DC1637" : "#7a7a80"};
  }
`;

export const IconGroupRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 24px;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    color: #7a7a80;
  }
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.grey.title};
`;
