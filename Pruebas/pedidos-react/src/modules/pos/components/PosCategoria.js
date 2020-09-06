import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";

const PosCategoria = ({ objCategoria }) => {
  const { global_categoria_id, setCategoriaActual } = useContext(PosContext);
  return (
    <button
      className={
        global_categoria_id === +objCategoria.categoria_id
          ? "btn btn-outline-primary active"
          : "btn btn-outline-primary"
      }
      onClick={() => setCategoriaActual(objCategoria.categoria_id)}
    >
      {objCategoria.categoria_nom}
    </button>
  );
};

export default PosCategoria;
