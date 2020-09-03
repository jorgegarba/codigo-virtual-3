import React from "react";

const AuthLogin = () => {
  return (
    <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario">
          
          <label for="">Email:</label>
          <input
            type="email"
            className="formulario__input"
            placeholder="Email"
          />
          <label for="">Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
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
