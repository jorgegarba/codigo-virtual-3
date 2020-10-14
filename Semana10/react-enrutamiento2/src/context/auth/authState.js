import React, { useReducer, useEffect } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import { postVerificar } from "../../services/auth";

const AuthState = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    autenticado: false,
    usu_nom: null,
    usu_id: null,
    token: null,
    cargando: true,
  });

  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, []);

  const iniciarSesionConLocalStorage = () => {
    if (!localStorage.getItem("token")) {
      /**
       * Es necesario cerrar_sesion para que el estado de cargando cambie a
       * false y de ést modo la ruta privada, redireccione a la landing page del proyecto
       */
      dispatch({
        type: "CERRAR_SESION",
      });
      return;
    }
    const token = localStorage.getItem("token");
    const payloadEnc = token.split(".")[1];
    const payloadDes = window.atob(payloadEnc);
    const payloadJSON = JSON.parse(payloadDes);
    postVerificar(token).then((rpta) => {
      rpta
        ? dispatch({
            type: "INICIAR_SESION",
            data: {
              ...payloadJSON,
              token,
            },
          })
        : dispatch({
            type: "CERRAR_SESION",
          });
    });
  };

  const iniciarSesion = (token) => {
    const payloadEnc = token.split(".")[1];
    /**
     * window.atob("algoencriptadoenBASE64") retorna el contenido desencriptado
     * window.btoa("algoquequeremosencriptar") retorna el contenido encriptado
     */
    const payloadDes = window.atob(payloadEnc);
    const payloadJSON = JSON.parse(payloadDes);
    localStorage.setItem("token", token);
    dispatch({
      type: "INICIAR_SESION",
      data: {
        ...payloadJSON,
        token,
      },
    });
  };

  const cerrarSesion = () => {
    dispatch({
      type: "CERRAR_SESION",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        autenticado: state.autenticado,
        usu_nom: state.usu_nom,
        usu_id: state.usu_id,
        cargando: state.cargando,
        iniciarSesion: iniciarSesion,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
