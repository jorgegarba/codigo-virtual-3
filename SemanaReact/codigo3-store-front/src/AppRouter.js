import React from 'react'

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRouter from './modules/auth/AuthRouter';
import ClienteRouter from './modules/cliente/ClienteRouter';

const AppRouter = () => {
  return (

    <Router>

      <Switch>
        <Route path={"/auth"} component={AuthRouter} />
        <Route path={"/cliente"} component={ClienteRouter} />

      </Switch>

    </Router>
  )
}

export default AppRouter
