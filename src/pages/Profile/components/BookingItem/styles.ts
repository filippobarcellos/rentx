import styled from "styled-components";

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

export const BookingPeriod = styled.div`
  height: 56px;
  padding: 0 32px;
  background: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.grey.secondary};
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const PeriodDate = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.grey.title};
`;

export const PeriodTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.grey.text_details};
  text-transform: uppercase;
  margin-right: 100px;
`;

export const PeriodDivider = styled.div`
  margin: 0 24px;
`;
