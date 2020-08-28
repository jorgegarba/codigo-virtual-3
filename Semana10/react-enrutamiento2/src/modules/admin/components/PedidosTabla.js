import React, { useState, useEffect } from "react";
import { getPedidos } from "../../../services/pedidos";
import { MDBDataTableV5 } from "mdbreact";

const PedidosTabla = ({ history }) => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    getPedidos().then((rpta) => {
      if (rpta.ok) {
        setPedidos(rpta.pedidos);
      }
    });
  }, []);

  const irAVerPedido = (pedido_id) => {
    history.push(`/admin/pedidos/${pedido_id}`);
  };

  const datatable = {
    columns: [
      { label: "ID", field: "pedido_id" },
      { label: "Nro. Pedido", field: "pedido_nro" },
      { label: "Fecha", field: "pedido_fech" },
      { label: "Estado", field: "pedido_est" },
      { label: "Nro Mesa", field: "mesa_nro" },
      { label: "Acciones", field: "acciones" },
    ],
    rows: pedidos.map((objPedido) => ({
      ...objPedido,
      pedido_est:
        objPedido.pedido_est === "pagado" ? (
          <span className="badge badge-success">Pagado</span>
        ) : (
          <span className="badge badge-danger">Anulado</span>
        ),
      mesa_nro: objPedido.Mesa.mesa_nro,
      acciones: (
        <button
          className="btn btn-block btn-dark"
          onClick={() => {
            irAVerPedido(objPedido.pedido_id);
          }}
        >
          Ver Detalles
        </button>
      ),
    })),
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <MDBDataTableV5
              responsive
              hover
              striped
              bordered
              data={datatable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosTabla;
