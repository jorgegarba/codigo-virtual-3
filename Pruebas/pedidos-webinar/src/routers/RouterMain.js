import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import RouterPos from "./RouterPos";
import RouterAuth from "./RouterAuth";
import RouterAdmin from "./RouterAdmin";
const RouterMain = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pos" component={RouterPos} />
        <Route path="/admin" component={RouterAdmin} />
        <Route path="/auth" component={RouterAuth} />
        <Redirect to={"/pos"} />
      </Switch>
    </Router>
  );
};

export default RouterMain;
