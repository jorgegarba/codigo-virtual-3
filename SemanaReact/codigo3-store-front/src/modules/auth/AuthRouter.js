import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthLoginScreen from './screens/login/AuthLoginScreen'

const AuthRouter = () => {
  return (
    <Switch>
      <Route path={"/auth/login"} component={AuthLoginScreen} />
    </Switch>
  )
}

export default AuthRouter
