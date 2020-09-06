import React from "react";
import PosScreen from "../modules/pos/screens/PosScreen";
import { Route, Switch } from "react-router-dom";
import "./../styles/styles.scss";
const RouterPos = () => {
  return (
    <Switch>
      <Route exact path="/pos" component={PosScreen} />
    </Switch>
  );
};

export default RouterPos;
