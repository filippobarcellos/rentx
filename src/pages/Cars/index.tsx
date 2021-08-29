import { DefaultLayout } from "layouts/Default";
import { CarItem } from "./components/CarItem";

import * as S from "./styles";

export const Cars = () => {
  return (
    <DefaultLayout title="Home">
      <S.Content>
        <S.ContentHeader>
          <S.Title>Available cars</S.Title>
          <S.Total>12 cars</S.Total>
        </S.ContentHeader>

        <S.CarsList>
          <CarItem />
          <CarItem />
          <CarItem />
        </S.CarsList>
      </S.Content>
    </DefaultLayout>
  );
};
