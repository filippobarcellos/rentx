import { useHistory } from "react-router-dom";

import { Button } from "components/Button";
import { FormLogin } from "components/FormLogin";
import { Auth } from "templates/Auth";
import Audi from "assets/images/audi_large.png";

export const Login = () => {
  const history = useHistory();

  const navigateToRegister = () => {
    history.push("/register");
  };

  return (
    <Auth
      subTitle="We are almost there."
      text="Login to start a awesome experience."
      img={Audi}
    >
      <FormLogin />

      <Button color="outline" onClick={navigateToRegister}>
        Register
      </Button>
    </Auth>
  );
};
