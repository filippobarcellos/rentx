import { DefaultLayout } from "layouts/Default";
import { AvatarInput } from "./components/Avatar";
import { BookingItem } from "./components/BookingItem";
import { ProfileForm } from "./components/Form";

import * as S from "./styles";

export const Profile = () => {
  return (
    <DefaultLayout title="Profile">
      <S.Container>
        <S.UserInfo>
          <S.Content>
            <AvatarInput />
            <S.Header>
              <S.Menu>
                <S.MenuItem>Profile</S.MenuItem>
                <S.MenuItem>Password</S.MenuItem>
              </S.Menu>
            </S.Header>
            <ProfileForm />
          </S.Content>
        </S.UserInfo>
        <S.Appointments>
          <S.Title>Last rentals</S.Title>
          <BookingItem />
        </S.Appointments>
      </S.Container>
    </DefaultLayout>
  );
};
