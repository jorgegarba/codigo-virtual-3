import React from "react";

const PosMesaItem = ({ objMesa }) => {
  return (
    <li className="mesas__mesa activo">
      <span className="mesas__titulo">Mesa</span>
      <span className="mesas__numero">{objMesa.mesa_nro}</span>
    </li>
  );
};

export default PosMesaItem;
