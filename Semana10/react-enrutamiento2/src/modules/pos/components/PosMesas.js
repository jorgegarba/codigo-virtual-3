import React from "react";
import PosMesaItem from "./PosMesaItem";

const PosMesas = () => {
  return (
    <div className="mesas">
      <ul className="mesas__lista">
        <PosMesaItem />
        <PosMesaItem />
        <PosMesaItem />
        <PosMesaItem />
        <PosMesaItem />
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
};

export default PosMesas;
