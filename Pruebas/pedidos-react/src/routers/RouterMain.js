import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RouterPos from "./RouterPos";
import RouterAuth from "./RouterAuth";
const RouterMain = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/pos" component={RouterPos} />
        <Route exact path="/auth" component={RouterAuth} />
      </Switch>
    </Router>
  );
};

export default RouterMain;
