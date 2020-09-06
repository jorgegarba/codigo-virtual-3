import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";

const PosPlato = ({ objPlato }) => {
  const { sumarPedido } = useContext(PosContext);
  return (
    <div className="carta__plato">
      <img src={objPlato.photo} alt="" />
      <h4 className="carta__titulo">{objPlato.name}</h4>
      <span className="carta__precio">S/ {objPlato.price}</span>
      <div className="carta__botones">
        <button className="btn btn-outline-primary btn-restar">-1</button>
        <button
          className="btn btn-outline-primary btn-sumar"
          onClick={() => {
            sumarPedido("sumar", objPlato);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default PosPlato;
