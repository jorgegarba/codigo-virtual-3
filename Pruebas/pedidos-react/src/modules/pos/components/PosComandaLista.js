import React from "react";

const PosComandaLista = () => {
  
  return (
    <ul className="comanda__lista">
      <li className="comanda__item">
        <p className="comanda__nombre">
          <span>
            <strong>Arroz Chaufa de Pollo</strong>
          </span>
          <span>Precio: S/ 35.00</span>
        </p>
        <p className="comanda__cantidad">01</p>
        <p className="comanda__precio">
          <strong>S/ 35.00</strong>
        </p>
      </li>
    </ul>
  );
};

export default PosComandaLista;
