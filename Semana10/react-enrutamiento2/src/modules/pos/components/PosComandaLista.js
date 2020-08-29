import React from "react";
import PosComandaListaItem from "./PosComandaListaItem";

const PosComandaLista = () => {
  return (
    <ul className="comanda__lista">
      <PosComandaListaItem />
      <PosComandaListaItem />
      <PosComandaListaItem />
      <PosComandaListaItem />
    </ul>
  );
};

export default PosComandaLista;
