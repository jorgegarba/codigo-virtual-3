import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import RouterAuth from "./RouterAuth";
import RouterAdmin from "./RouterAdmin";
import RouterGuest from "./RouterGuest";

const RouterMain = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/auth"} component={RouterAuth} />
        <Route path={"/admin"} component={RouterAdmin} />
        <Route path={"/"} component={RouterGuest} />
      </Switch>
    </Router>
  );
};

export default RouterMain;
