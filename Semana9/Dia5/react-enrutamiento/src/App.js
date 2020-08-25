import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/home/Home";
import Pos from "./screens/pos/Pos";
import Platos from "./screens/platos/Platos";
import NotFound from "./screens/404/NotFound";

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/pos"}>Punto de Venta</Link>
            </li>
            <li>
              <Link to={"/platos"}>Lista de Platos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path={"/pos"} component={Pos} />
        <Route exact path={"/platos"} component={Platos} />
        <Route exact path={"/"} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
