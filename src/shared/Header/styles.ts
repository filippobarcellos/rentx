import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.secondary};
  background: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey.title};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.span`
  margin-right: 16px;
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey.title};
`;

export const GroupIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.grey.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
`;
