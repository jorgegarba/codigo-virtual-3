import React from "react";
import PosMesas from "../components/PosMesas";
import PosCategorias from "../components/PosCategorias";
import PosPlatos from "../components/PosPlatos";
import PosComandaLista from "../components/PosComandaLista";

const Pos = () => {
  return (
    <section className="tabla">
      <PosMesas />
      <div className="pedido">
        <div className="carta">
          <PosCategorias />
          <PosPlatos />
        </div>
        <div className="boleta">
          <h3>Pedido</h3>
          <div className="comanda">
            <h4 className="comanda__mesa">Mesa 01</h4>
            <p className="comanda__usuario">Carlos Jimenez</p>
            <hr />

            <PosComandaLista />
            <button className="boton boton-success boton-block">PAGAR</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pos;
