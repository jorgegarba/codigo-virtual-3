import React, { useReducer } from 'react'
import AuthContext from './authContext'


const authReducer = (stateActual, action) => {
  if (action.type === "INICIAR_SESION") {
    return {
      ...stateActual,
      ...action.data,
      autenticado: true,
    }
  }
}
const AuthState = (props) => {

  const [state, dispatch] = useReducer(authReducer, {
    autenticado: false,
    username: null,
    apellido: null,
    nombre: null,
    correo: null,
    token: null
  });
  const iniciarSesionState = (objSesion) => {
    dispatch({
      type: "INICIAR_SESION",
      data: { ...objSesion }
    })
  }

  return (
    <AuthContext.Provider value={{
      iniciarSesionState
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
