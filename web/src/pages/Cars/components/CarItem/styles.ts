import styled from "styled-components";

export const CarItem = styled.li`
  background: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.grey.secondary};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.secondary};
`;

export const Image = styled.img`
  max-width: 288px;
  height: 132px;
`;

export const Footer = styled.div`
  display: flex;
  padding: 20px 24px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const FooterGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;

export const Tag = styled.h4`
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey.text_details};
  text-transform: uppercase;
`;

export const Model = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey.title};
  text-transform: uppercase;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`;

export const Icon = styled.img`
  margin-left: auto;
`;
