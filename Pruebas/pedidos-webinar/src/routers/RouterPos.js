import React from "react";
import PosScreen from "../modules/pos/screens/PosScreen";
import { Route, Switch, Redirect } from "react-router-dom";
import "./../styles/pos.scss";
const RouterPos = () => {
  return (
    <Switch>
      <Route path="/pos" component={PosScreen} />
      <Redirect to={"/"} />
    </Switch>
  );
};

export default RouterPos;
