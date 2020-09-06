import React, { useEffect, useState, useContext } from "react";
import PosPlato from "./PosPlato";
import { getPlatos } from "../../../services/platos";
import PosContext from "../../../context/pos/posContext";

const PosPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const { global_categoria_id } = useContext(PosContext);
  const platosPorCategoria = platos.filter(
    (objPlato) => objPlato.categoria_id === global_categoria_id
  );

  useEffect(() => {
    getPlatos().then((platosArray) => {
      setPlatos(platosArray);
    });
  }, []);

  return (
    <div className="carta__platos">
      {platosPorCategoria.map((objPlato) => (
        <PosPlato objPlato={objPlato} key={objPlato.plato_id} />
      ))}
    </div>
  );
};

export default PosPlatos;
