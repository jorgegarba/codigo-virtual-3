import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const RutaPrivada = ({ path, componente: Componente }) => {
  const localAuthContext = useContext(AuthContext);
  const { autenticado, cargando } = localAuthContext;
  console.log("ruta privada");
  if (cargando) {
    return <h5>Cargando...</h5>;
  } else {
    return autenticado ? (
      <Route path={path} component={Componente} />
    ) : (
      <Redirect to={"/"} />
    );
  }
};

export default RutaPrivada;
