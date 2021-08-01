import { FiCamera, FiLock } from "react-icons/fi";

import { DefaultLayout } from "layouts/Default";
import { Button } from "shared/Button";
import { Input } from "shared/Input";

import audi from "assets/images/audi.png";

import * as S from "./styles";

export const Profile = () => {
  return (
    <DefaultLayout title="Profile">
      <S.Container>
        <S.UserInfo>
          <S.Content>
            <S.Avatar>
              <img
                src="https://avatars.githubusercontent.com/u/56128203?v=4"
                alt="Profile"
              />
              <button>
                <FiCamera size="24px" color="#FFFFFF" />
              </button>
            </S.Avatar>
            <S.Header>
              <S.Menu>
                <S.MenuItem>Profile</S.MenuItem>
                <S.MenuItem>Password</S.MenuItem>
              </S.Menu>
            </S.Header>
            <S.Form>
              <Input name="password" iconLeft={FiLock} placeholder="Password" />
              <Input
                name="newPassword"
                iconLeft={FiLock}
                placeholder="New Password"
              />
              <Input
                name="passwordConfirmation"
                iconLeft={FiLock}
                placeholder="Password Confirmation"
              />
              <Button>Update</Button>
            </S.Form>
          </S.Content>
        </S.UserInfo>
        <S.Appointments>
          <S.Title>Appointments</S.Title>

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
            <span>Periodo do Aluguel</span>
            <S.StartDate>18 Jul 2021</S.StartDate>
            <S.FinalDate>20 Jul 2021</S.FinalDate>
          </S.BookingPeriod>
        </S.Appointments>
      </S.Container>
    </DefaultLayout>
  );
};
