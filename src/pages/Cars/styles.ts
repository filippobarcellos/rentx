import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.secondary};
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.colors.grey.title};
`;

export const Total = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.grey.text};
`;

export const CarsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 24px;
  margin-top: 24px;
`;
