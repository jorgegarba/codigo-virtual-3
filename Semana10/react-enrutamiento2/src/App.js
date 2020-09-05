import React from "react";
import RouterMain from "./routers/RouterMain";
import AuthState from "./context/auth/authState";


const App = () => {
  return (
    <AuthState>
      <RouterMain />
    </AuthState>
  );
};

export default App;
