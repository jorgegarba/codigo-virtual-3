import React, { useState, useContext } from "react";
import { postRegister } from "../../../services/auth";
import AuthContext from "../../../context/auth/authContext";

const AuthRegister = ({ history }) => {
  const localAuthContext = useContext(AuthContext);
  const { iniciarSesion } = localAuthContext;

  const [formulario, setFormulario] = useState({
    usu_email: "",
    usu_nom: "",
    usu_ape: "",
    pass1: "",
    pass2: "",
    error: false,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const { usu_ape, usu_email, usu_nom, pass1, pass2 } = formulario;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      usu_ape.trim() !== "" &&
      usu_nom.trim() !== "" &&
      usu_email.trim() !== "" &&
      pass1.trim() !== "" &&
      pass1 === pass2
    ) {
      const objUsuario = {
        ...formulario,
        password: pass1,
        usu_tipo: "admin",
      };
      postRegister(objUsuario).then((rpta) => {
        console.log(rpta);
        if (rpta.ok) {
          iniciarSesion(rpta.token);
          // history.replace("ruta") borra el historial de paginas visitadas en el dominio
          // y cancela la posibilidad de hacer "Atrás" en el navegador
          history.replace("/pos");
        }
      });
    }
  };

  return (
    <main className="login">
      <div className="login__form">
        <h1>Crear Cuenta</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="">Nombre:</label>
          <input
            type="text"
            className="formulario__input"
            placeholder="Nombre"
            onChange={handleChange}
            value={formulario.usu_nom}
            name="usu_nom"
          />
          <label htmlFor="">Apellido:</label>
          <input
            type="text"
            className="formulario__input"
            placeholder="Apellido"
            onChange={handleChange}
            name="usu_ape"
            value={formulario.usu_ape}
          />
          <label htmlFor="">Email:</label>
          <input
            type="email"
            className="formulario__input"
            placeholder="Email"
            name="usu_email"
            value={formulario.usu_email}
            onChange={handleChange}
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
            name="pass1"
            value={formulario.pass1}
            onChange={handleChange}
          />
          <label htmlFor="">Repita Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
            name="pass2"
            value={formulario.pass2}
            onChange={handleChange}
          />
          <button className="formulario__submit" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </main>
  );
};

export default AuthRegister;
