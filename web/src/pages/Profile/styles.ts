import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  height: 100%;
`;

export const UserInfo = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 384px;
  margin-top: 80px;
`;

export const Header = styled.div`
  margin-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.black};
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
`;

export const MenuItem = styled.li`
  font-family: "Archivo", sans-serif;
  font-size: 18px;
  color: ${(props) => props.theme.colors.grey.text_details};

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    margin-top: 16px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

// BOOKING SECTION

export const Appointments = styled.div`
  flex: 1;
  align-items: stretch;
  padding-top: 80px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.colors.grey.title};
  margin-bottom: 24px;
`;
