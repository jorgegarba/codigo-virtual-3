import React from "react";
import { Route, Switch } from "react-router-dom";
import Pos from "../modules/pos/screens/Pos";
import "./../modules/pos/styles/pos.css";
const RouterPos = () => {
  return (
    <>
      <Switch>
        <Route path={"/pos"} component={Pos} />
      </Switch>
    </>
  );
};

export default RouterPos;
