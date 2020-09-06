import React from "react";
import PosComandaItem from "./PosComandaItem";

const PosComandaLista = ({ pedidoMesaActual }) => {
  return (
    <ul className="comanda__lista">
      {pedidoMesaActual.platos.map((objPlato) => (
        <PosComandaItem
          objPlato={objPlato}
          key={pedidoMesaActual.mesa_id + "" + objPlato.plato_id}
        />
      ))}
    </ul>
  );
};

export default PosComandaLista;
