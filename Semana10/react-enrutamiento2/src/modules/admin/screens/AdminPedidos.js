import React from "react";
import PedidosTabla from "./../components/PedidosTabla";
const AdminPedidos = (props) => {
  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Pedidos</h1>
        </div>
      </div>
      <PedidosTabla history={props.history} />
    </>
  );
};

export default AdminPedidos;
