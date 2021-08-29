import logo from "assets/images/logo_full.png";
import car from "assets/images/home_car.png";

import { Button } from "shared/Button";

import * as S from "./styles";

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Logo src={logo} alt="Rentx" />
          <S.Title>
            Looking to hire a car? <br />
            You've come to the <br />
            right place
          </S.Title>
          <S.Description>
            We have a lot of options for you to drive safely, with confort and
            happy.
          </S.Description>

          <Button>Start now</Button>
        </S.Content>
        <S.ImageContent>
          <S.Image src={car} alt="audi" />
        </S.ImageContent>
      </S.Container>
    </S.Wrapper>
  );
};
