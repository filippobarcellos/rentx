import audi from "assets/images/audi.png";
import seta from "assets/images/arrow.png";

import * as S from "./styles";

export const BookingItem = () => {
  return (
    <>
      <S.Booking>
        <S.CarInfo>
          <S.Tag>AUDI</S.Tag>
          <S.Model>RS 5 Coupé</S.Model>
          <S.Tag>ao dia</S.Tag>
          <S.Price>R$ 340</S.Price>
        </S.CarInfo>

        <S.BookingImage>
          <img src={audi} alt="audi" />
        </S.BookingImage>
      </S.Booking>

      <S.BookingPeriod>
        <S.PeriodTitle>Periodo do Aluguel</S.PeriodTitle>
        <S.PeriodDate>18 Jul 2021</S.PeriodDate>
        <S.PeriodDivider>
          <img src={seta} alt="arrow" />
        </S.PeriodDivider>
        <S.PeriodDate>20 Jul 2021</S.PeriodDate>
      </S.BookingPeriod>
    </>
  );
};
