import React from "react";
import { Route, Redirect } from "react-router-dom";

const RutaPrivada = ({ path, componente: Componente }) => {
  const autenticado = false;
  return autenticado ? (
    <Route path={path} component={Componente} />
  ) : (
    <Redirect to={"/"} />
  );
};

export default RutaPrivada;
