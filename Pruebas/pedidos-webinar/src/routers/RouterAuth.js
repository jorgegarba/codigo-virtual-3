import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../modules/auth/screens/LoginScreen";
import RegisterScreen from "../modules/auth/screens/RegisterScreen";

const RouterAuth = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginScreen} />
      <Route path="/auth/register" component={RegisterScreen} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default RouterAuth;
