import React, { useEffect, useReducer } from 'react'
import AuthContext from './authContext'


const authReducer = (stateActual, action) => {
  if (action.type === "INICIAR_SESION") {
    return {
      ...stateActual,
      ...action.data,
      autenticado: true,
      cargando: false
    }
  }
  if (action.type === "CERRAR_SESION") {
    return {
      cargando: false,
      autenticado: false,
      username: null,
      apellido: null,
      nombre: null,
      correo: null,
      token: null
    }
  }
}
const AuthState = (props) => {

  const [state, dispatch] = useReducer(authReducer, {
    cargando: true,
    autenticado: false,
    username: null,
    apellido: null,
    nombre: null,
    correo: null,
    token: null
  });


  const iniciarSesionState = (objSesion) => {
    localStorage.setItem("sesion", JSON.stringify(objSesion));
    dispatch({
      type: "INICIAR_SESION",
      data: { ...objSesion }
    })
  }

  const cerrarSesion = () => {
    localStorage.removeItem("sesion");
    dispatch({
      type: "CERRAR_SESION"
    })
  }

  const iniciarSesionConLocalStorage = () => {
    const stringSesion = localStorage.getItem("sesion");
    if (stringSesion) {
      const objSesion = JSON.parse(stringSesion);
      /**
       * Si aquí tuviéramos un JWT, es problable que por más que de que el localStorage
       * tenga nuestra variable de sesión setteada...
       * Yo debería validar que el JWT ó que el token que se encuentra en mi localStorage
       * se válido ¿Cómo? creando una ruta en el backend para validar una sesión.
       * Cuando el backend responda true por ejemplo, recién debería llamar al dispatch
       * para iniciar sesión, si response false, debería borrar el localStorage y cerrarSesión
       * automáticamente
       */
      console.log(objSesion)
      // Si deseamos simular asíncrono de consulta a la base de datos,
      // quitar el comentario al setTimeout();
      // setTimeout(() => {
      dispatch({
        type: "INICIAR_SESION",
        data: { ...objSesion }
      })
      // }, 2000);
    } else {
      console.log("NO HABIA UNA SESIÓN ACTIVA");
    }
  }
  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, []);

  return (
    <AuthContext.Provider value={{
      autenticado: state.autenticado,
      username: state.username,
      cargando: state.cargando,
      iniciarSesionState,
      cerrarSesion
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
