import { Switch, Route } from "react-router-dom";

import { Login } from "pages/Auth/Login";
import { ForgotPassword } from "pages/Auth/ForgotPassword";
import { Register } from "pages/Auth/Register";
import { Profile } from "pages/Profile";
import { Home } from "pages/Home";
import { Cars } from "pages/Cars";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cars" component={Cars} />
      <Route path="/password/forgot" component={ForgotPassword} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
};
