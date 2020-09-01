import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";

const PosNavigation = () => {
  const localPosContext = useContext(PosContext);
  console.log(localPosContext);

  return (
    <nav className="menu">
      <ul className="menu__lista">
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
      </ul>
    </nav>
  );
};

export default PosNavigation;
