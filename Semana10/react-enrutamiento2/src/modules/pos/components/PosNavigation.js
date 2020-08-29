import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";

const PosNavigation = () => {
  const contextoPOS = useContext(PosContext);
  // const { global_mesa_id, global_saludo } = contextoPOS;
  // console.log(global_mesa_id);
  // console.log(global_saludo);
  console.log(contextoPOS);
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
