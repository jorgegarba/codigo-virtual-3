import React, { useContext } from "react";
import PosComandaListaItem from "./PosComandaListaItem";
import PosContext from "../../../context/pos/posContext";

const PosComandaLista = () => {
  const localPosContext = useContext(PosContext);
  const { globalPedidos, globalObjMesa } = localPosContext;

  const pedidoActual = globalPedidos.find(
    (objPedido) => objPedido.mesa_id === globalObjMesa.mesa_id
  );

  return (
    <ul className="comanda__lista">
      {!pedidoActual ? (
        <strong>No hay pedidos en esta mesa 🙄</strong>
      ) : (
        pedidoActual.pedidoplatos.map((pedidoItem, i) => {
          return <PosComandaListaItem key={i} pedidoItem={pedidoItem} />;
        })
      )}
    </ul>
  );
};

export default PosComandaLista;
