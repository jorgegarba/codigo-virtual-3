import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";

const PosMesaItem = ({ objMesa }) => {
  const localPosContext = useContext(PosContext);
  const { globalObjMesa, seleccionarMesa } = localPosContext;
  return (
    <li
      className={`mesas__mesa ${globalObjMesa?.mesa_id === objMesa.mesa_id && "activo"}`}
      onClick={() => {
        seleccionarMesa(objMesa);
      }}
    >
      <span className="mesas__titulo">Mesa</span>
      <span className="mesas__numero">{objMesa.mesa_nro}</span>
    </li>
  );
};

export default PosMesaItem;
