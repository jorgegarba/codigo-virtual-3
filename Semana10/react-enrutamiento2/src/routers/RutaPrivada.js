import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const RutaPrivada = ({ path, componente: Componente }) => {
  const localAuthContext = useContext(AuthContext);
  const { autenticado } = localAuthContext;

  return autenticado ? (
    <Route path={path} component={Componente} />
  ) : (
    <Redirect to={"/"} />
  );
};

export default RutaPrivada;
