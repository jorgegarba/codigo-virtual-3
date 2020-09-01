import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import PosCargando from "./PosCargando";

const PosCategorias = () => {
  const { result, loading } = useFetch("/categoria");

  return (
    <div className="carta__categorias">
      {loading && <PosCargando />}
      {!loading &&
        result.content.map((objCategoria) => {
          return (
            <button
              className="boton boton-outline-primary"
              key={objCategoria.categoria_id}
            >
              {objCategoria.categoria_nom}
            </button>
          );
        })}
    </div>
  );
};

export default PosCategorias;
