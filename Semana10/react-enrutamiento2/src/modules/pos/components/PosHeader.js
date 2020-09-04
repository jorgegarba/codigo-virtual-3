import React, { useContext } from "react";
import AuthContext from "../../../context/auth/authContext";
import { withRouter } from "react-router-dom";

const PosHeader = ({ history }) => {
  const localAuthContext = useContext(AuthContext);
  const { usu_nom, cerrarSesion } = localAuthContext;
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/assets/img/logo.svg" alt="" />
      </div>
      <div className="header__buscador">
        <img src="/assets/img/search.svg" alt="" />
        <input
          type="text"
          className="header__input"
          placeholder="Busca un término"
        />
      </div>
      <div className="header__usuario">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
        <span>{usu_nom}</span>
        <button
          className="boton boton-success"
          onClick={() => {
            cerrarSesion();
            history.replace("/");
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
};

// Cuando envolvemos un compoennte en la función withRouter,
// éste componente recibe en sus props, todos los parametros
// del enrutador así como history, location, matchParams ,etc
export default withRouter(PosHeader);
