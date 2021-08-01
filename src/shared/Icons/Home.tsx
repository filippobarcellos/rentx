import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
`;

interface IconProps {
  className?: string;
  color?: string;
}

export const HomeIcon = ({ className, color = "#7A7A80" }: IconProps) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path
      d="M19 21.9999H5C4.73478 21.9999 4.48043 21.8946 4.29289 21.707C4.10536 21.5195 4 21.2651 4 20.9999V11.9999H1L11.327 2.61192C11.5111 2.4444 11.7511 2.35156 12 2.35156C12.2489 2.35156 12.4889 2.4444 12.673 2.61192L23 11.9999H20V20.9999C20 21.2651 19.8946 21.5195 19.7071 21.707C19.5196 21.8946 19.2652 21.9999 19 21.9999ZM6 19.9999H18V10.1569L12 4.70292L6 10.1569V19.9999Z"
      fill={color}
    />
  </Svg>
);
