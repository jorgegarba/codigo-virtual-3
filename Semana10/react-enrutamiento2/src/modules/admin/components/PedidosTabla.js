import React, { useState, useEffect } from "react";
import { getPedidos } from "../../../services/pedidos";

const PedidosTabla = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    getPedidos().then((rpta) => {
      console.log(rpta);
    });
  }, []);

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">Aquí irá la tabla de pedidos</div>
        </div>
      </div>
    </div>
  );
};

export default PedidosTabla;
