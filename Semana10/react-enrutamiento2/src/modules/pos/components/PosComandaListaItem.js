import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import PosCargando from "./PosCargando";

const PosComandaListaItem = ({ pedidoItem }) => {
  const { loading, result } = useFetch(`/plato/${pedidoItem.plato_id}`);
  
  // TODO: useCallback, useMemo

  return loading ? (
    <PosCargando />
  ) : (
    <li className="comanda__item">
      <p className="comanda__nombre">
        <span>
          <strong>{result.content.plato_nom}</strong>
        </span>
        <span>Precio: S/ {result.content.plato_pre}</span>
      </p>
      <p className="comanda__cantidad">{pedidoItem.pedidoplato_cant}</p>
      <p className="comanda__precio">
        <strong>
          S/{" "}
          {(+result.content.plato_pre * +pedidoItem.pedidoplato_cant).toFixed(2)}
        </strong>
      </p>
    </li>
  );
};

export default PosComandaListaItem;
