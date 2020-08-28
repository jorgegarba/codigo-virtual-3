import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouterAuth from "./RouterAuth";
import RouterAdmin from "./RouterAdmin";
import RouterGuest from "./RouterGuest";
import RouterPos from "./RouterPos";

const RouterMain = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/auth"} component={RouterAuth} />
        <Route path={"/admin"} component={RouterAdmin} />
        <Route path={"/pos"} component={RouterPos} />
        <Route path={"/"} component={RouterGuest} />
      </Switch>
    </Router>
  );
};

export default RouterMain;
