import React, { useContext } from "react";
import AuthContext from "../../../context/auth/authContext";

const PosHeader = () => {
  const localAuthContext = useContext(AuthContext);
  const { usu_nom } = localAuthContext;
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
      </div>
    </header>
  );
};

export default PosHeader;
