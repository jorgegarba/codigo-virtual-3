import React from 'react'

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ClienteRouter from './modules/cliente/ClienteRouter';

const AppRouter = () => {
  return (

    <Router>

      <Switch>

        <Route path={"/cliente"} component={ClienteRouter} />

      </Switch>

    </Router>
  )
}

export default AppRouter
