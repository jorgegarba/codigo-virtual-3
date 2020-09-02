import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";

const PosPlatoItem = ({ objPlato }) => {
  const localPosContext = useContext(PosContext);
  const { incrementarPlato } = localPosContext;

  return (
    <div className="carta__plato">
      <img src={objPlato.plato_img} alt="Imagen del plato" />
      <h4 className="carta__titulo">{objPlato.plato_nom}</h4>
      <span className="carta__precio">S/ {objPlato.plato_pre}</span>
      <div className="carta__botones">
        <button className="boton boton-outline-primary boton-restar">-1</button>
        <button
          className="boton boton-outline-primary boton-sumar"
          onClick={() => {
            incrementarPlato(objPlato.plato_id);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default PosPlatoItem;
