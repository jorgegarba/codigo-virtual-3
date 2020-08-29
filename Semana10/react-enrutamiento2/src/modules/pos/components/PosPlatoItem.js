import React from "react";

const PosPlatoItem = () => {
  return (
    <div className="carta__plato">
      <img
        src="https://static.wixstatic.com/media/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.png/v1/fill/w_275,h_183,al_c,lg_1,q_90/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.webp"
        alt=""
      />
      <h4 className="carta__titulo">Arroz Chaufa de Pollo</h4>
      <span className="carta__precio">S/ 52.00</span>
      <div className="carta__botones">
        <button className="boton boton-outline-primary boton-restar">-1</button>
        <button className="boton boton-outline-primary boton-sumar">+1</button>
      </div>
    </div>
  );
};

export default PosPlatoItem;
