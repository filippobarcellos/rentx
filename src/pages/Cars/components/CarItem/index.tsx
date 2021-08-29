import audi from "assets/images/audi.png";
import energy from "assets/images/energy.png";

import * as S from "./styles";

export const CarItem = () => {
  return (
    <S.CarItem>
      <S.Header>
        <S.Image src={audi} />
      </S.Header>
      <S.Footer>
        <S.FooterGroup>
          <S.Tag>Audi</S.Tag>
          <S.Model>RS 5 Coupé</S.Model>
        </S.FooterGroup>

        <S.FooterGroup>
          <S.Tag>day</S.Tag>
          <S.Price>RS 640</S.Price>
        </S.FooterGroup>

        <S.Icon src={energy} />
      </S.Footer>
    </S.CarItem>
  );
};
