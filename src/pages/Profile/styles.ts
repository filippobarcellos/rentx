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
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 384px;
  margin-top: 80px;
`;

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

export const Form = styled.form`
  width: 100%;
  button {
    margin-top: 24px;
    max-width: 384px;
  }
`;

// BOOKING

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

export const Booking = styled.div`
  padding: 40px 32px;
  height: 198px;
  background: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.grey.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.h4`
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey.text_details};
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const Model = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey.title};
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  margin-top: 6px;
`;
export const BookingImage = styled.div`
  img {
    max-width: 288px;
    height: 132px;
  }
`;
export const BookingPeriod = styled.div``;
export const StartDate = styled.span``;
export const FinalDate = styled.span``;
