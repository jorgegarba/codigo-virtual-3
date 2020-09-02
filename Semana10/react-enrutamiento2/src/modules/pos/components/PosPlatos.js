import React, { useContext, useState, useEffect } from "react";
import PosPlatoItem from "./PosPlatoItem";
import PosContext from "../../../context/pos/posContext";
import { getPlatosByCategoriaId } from "../../../services/categoria";

const PosPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const localPosContext = useContext(PosContext);
  const { globalObjCategoria } = localPosContext;
  useEffect(() => {
    if (globalObjCategoria) {
      getPlatosByCategoriaId(globalObjCategoria.categoria_id).then((rpta) => {
        console.log(rpta);
        if (rpta.ok) {
          setPlatos(rpta.content.Platos);
        }
      });
    }
  }, [globalObjCategoria]);
  return (
    <div className="carta__platos">
      {platos.map((objPlato) => {
        return <PosPlatoItem objPlato={objPlato} key={objPlato.plato_id} />;
      })}
    </div>
  );
};
export default PosPlatos;
