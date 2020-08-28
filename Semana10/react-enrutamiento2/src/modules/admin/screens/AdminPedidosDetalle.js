import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPedidosById } from "../../../services/pedidos";
import Cargando from "../components/Cargando";

const AdminPedidosDetalle = ({ history }) => {
  // console.log(props.match.params.pedido_id);
  const { pedido_id } = useParams();
  const [pedido, setPedido] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPedidosById(pedido_id).then((rpta) => {
      // rpta.ok && setPedido(rpta.pedido);
      if (rpta.ok) {
        // console.log(rpta.pedido.Mesa.mesa_nro);
        setPedido(rpta.pedido);
      }
      setLoading(false);
    });
  }, [pedido_id]);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Detalle de Pedido</h1>
          {loading && (
            <Cargando tipo={"info"} texto={"Cargando detalle de pedido"} />
          )}
        </div>
      </div>
      {!loading && (
        <>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-header">
                  <h5 className="card-title">Pedido</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Nro Pedido: </strong>
                    {pedido.pedido_nro}
                  </p>
                  <p className="card-text">
                    <strong>Estado: </strong>{" "}
                    {pedido.pedido_est === "pagado" ? (
                      <span className="badge badge-success">Pagado</span>
                    ) : (
                      <span className="badge badge-danger">Anulado</span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong>Fecha: </strong>
                    {pedido.pedido_fech}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-header">
                  <h5 className="card-title">Mesa</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Nro Mesa: </strong>
                    {pedido.Mesa.mesa_nro}
                  </p>
                  <p className="card-text">
                    <strong>Capacidad: </strong>
                    {pedido.Mesa.mesa_cap} personas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-header">
                  <h5 className="card-title">Trabajador</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Nombre: </strong>
                    {pedido.Usuario.usu_nom}
                  </p>
                  <p className="card-text">
                    <strong>Apellido: </strong>
                    {pedido.Usuario.usu_ape}
                  </p>
                  <p className="card-text">
                    <strong>Tipo: </strong>
                    {pedido.Usuario.usu_tipo}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="card shadow">
                <div className="card-header">
                  <h4 className="card-title">Detalle del Pedido</h4>
                </div>
                <div className="card-body">
                  <table className="table table-hover table-striped table-bordered text-center">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Cant.</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th>P. Unitario</th>
                        <th>P. Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pedido.PedidoPlatos.map((objPedido, i) => {
                        return (
                          <tr key={objPedido.pedidoplato_id}>
                            <td>{i + 1}</td>
                            <td>{objPedido.pedidoplato_cant}</td>
                            <td>{objPedido.Plato.plato_nom}</td>
                            <td>
                              <img
                                src={objPedido.Plato.plato_img}
                                style={{
                                  height: "100px",
                                }}
                                alt={"imagen del plato"}
                              />
                            </td>
                            <td>S/ {objPedido.Plato.plato_pre}</td>
                            <td>
                              S/{" "}
                              {(
                                +objPedido.pedidoplato_cant *
                                +objPedido.Plato.plato_pre
                              ).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-end">
            <div className="col-md-2">
              <button
                className="btn btn-block btn-dark"
                onClick={() => {
                  // history.goBack();
                  history.push("/admin/pedidos");
                }}
              >
                <i className="fas fa-chevron-left"></i> Atrás
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminPedidosDetalle;
