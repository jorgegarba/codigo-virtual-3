import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './AppRouter';
import AuthState from './context/auth/authState';

const App = () => {
  return (
    <AuthState>
      <AppRouter />
    </AuthState>
  )
}

export default App
