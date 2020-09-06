import React, { useState, useEffect } from "react";
import PosMesa from "./PosMesa";
import { getMesas } from "../../../services/mesas";

export const PosMesas = () => {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    getMesas().then((mesasArray) => {
      setMesas(mesasArray);
    });
  }, []);
  return (
    <div className="mesas">
      <ul className="mesas__lista">
        {mesas.map((objMesa) => (
          <PosMesa objMesa={objMesa} key={objMesa.mesa_id} />
        ))}
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
};
