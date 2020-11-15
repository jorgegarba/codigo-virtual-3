import React, { useContext, useState } from 'react'
import AuthContext from '../../../../context/auth/authContext';
import { postLogin } from '../../../../services/authService';
import "./AuthLoginScreen.css"

const AuthLoginScreen = ({ history }) => {

  const { iniciarSesionState } = useContext(AuthContext);

  const [formulario, setFormulario] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    postLogin(formulario).then(rpta => {
      if (!rpta.detail) {
        iniciarSesionState(rpta);
        history.push("/cliente/catalogo");
      }
    })
  }



  return (
    <main className="container-fluid contenedor bg-dark ">
      <div className="row contenedor align-items-center">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Username:</label>
                  <input type="text" name="username"
                    value={formulario.username}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nombre de usuario" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password:</label>
                  <input type="password" name="password"
                    className="form-control"
                    onChange={handleChange}
                    value={formulario.password}
                    placeholder="Password" />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary"
                    type="submit">Iniciar Sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLoginScreen
