import React, { useEffect, useState } from "react";
import { getCategorias } from "../../../services/categorias";
import PosCategoria from "./PosCategoria";

const PosCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getCategorias().then((categoriasArray) => setCategorias(categoriasArray));
  }, []);
  return (
    <div className="carta__categorias">
      {categorias.map((objCategoria) => (
        <PosCategoria
          key={objCategoria.categoria_id}
          objCategoria={objCategoria}
        />
      ))}
    </div>
  );
};

export default PosCategorias;
