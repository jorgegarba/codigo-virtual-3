const AuthReducer = (stateActual, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        autenticado: true,
        usu_nom: action.data.usu_nom,
        usu_id: action.data.usu_id,
        token: action.data.token,
        cargando: false,
      };
    case "CERRAR_SESION":
      localStorage.removeItem("token");
      return {
        autenticado: false,
        usu_nom: null,
        usu_id: null,
        token: null,
        cargando: false,
      };

    default:
      return { ...stateActual };
  }
};

export default AuthReducer;
