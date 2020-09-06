import React from "react";

const PosComandaItem = ({ objPlato }) => {
  return (
    <li className="comanda__item">
      <p className="comanda__nombre">
        <span>
          <strong>{objPlato.nombre}</strong>
        </span>
        <span>Precio: S/ {objPlato.precio / objPlato.cant}</span>
      </p>
      <p className="comanda__cantidad">{objPlato.cant}</p>
      <p className="comanda__precio">
        <strong>S/ {objPlato.precio}</strong>
      </p>
    </li>
  );
};

export default PosComandaItem;
