import React from "react";
import { Route, Switch } from "react-router-dom";
import Pos from "../modules/pos/screens/Pos";
import "./../modules/pos/styles/pos.css";
import PosHeader from "../modules/pos/components/PosHeader";
import PosNavigation from "../modules/pos/components/PosNavigation";
import PosState from "../context/pos/posState";
const RouterPos = () => {
  return (
    <PosState>
      <PosHeader />
      <main className="pos-container">
        <PosNavigation />
        <Switch>
          <Route path={"/pos"} component={Pos} />
        </Switch>
      </main>
    </PosState>
  );
};

export default RouterPos;
