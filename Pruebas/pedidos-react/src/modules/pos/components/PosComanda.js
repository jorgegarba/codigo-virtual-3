import React from "react";
import PosComandaLista from "./PosComandaLista";

export const PosComanda = () => {
  return (
    <div className="comanda">
      <h4 className="comanda__mesa">Mesa 01</h4>
      <p className="comanda__usuario">Daniel De La Cruz</p>
      <hr />

      <PosComandaLista />
      <button className="btn btn-success">PAGAR</button>
    </div>
  );
};
