import React, { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../../context/auth/authContext";
import { postLogin } from "../../../services/auth";

const AuthLogin = ({ history }) => {
  const localAuthContext = useContext(AuthContext);
  const { iniciarSesion } = localAuthContext;

  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: validar los campos del formulario e inclusive generar una variable
    // de estado de error en el formulario
    postLogin(formulario.email, formulario.password).then((rpta) => {
      if (rpta.ok) {
        iniciarSesion(rpta.token);
        history.replace("/pos");
      }
    });
  };

  return (
    <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario" onSubmit={onSubmit}>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            className="formulario__input"
            placeholder="Email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
            name="password"
            value={formulario.password}
            onChange={handleChange}
          />
          <button className="formulario__submit" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
};

export default AuthLogin;
