import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "../modules/guest/screens/GuestLanding";
import GuestNosotros from "../modules/guest/screens/GuestNosotros";

const RouterGuest = () => {
  return (
    <Switch>
      <Route path={"/nosotros"} component={GuestNosotros} />
      <Route path={"/"} component={GuestLanding} />
    </Switch>
  );
};

export default RouterGuest;
