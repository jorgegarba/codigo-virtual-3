import React, { useState, useEffect, useContext } from "react";
import PosComandaLista from "./PosComandaLista";
import { getMesas } from "../../../services/mesas";
import PosContext from "../../../context/pos/posContext";
import Swal from "sweetalert2";
export const PosComanda = () => {
  const [objMesa, setObjMesa] = useState({});
  const { global_mesa_id, global_pedidos } = useContext(PosContext);
  useEffect(() => {
    getMesas().then((mesas) => {
      setObjMesa(mesas.find((mesa) => +mesa.id === +global_mesa_id));
    });
  });

  const pagar = () => {
    Swal.fire({
      title: "¿Seguro que deseas pagar?",
      text: "Se guardarán los cambios en la base de datos",
      icon: "info",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Hecho!",
          text: "Pagado correctamente",
          timer: 1500,
          position: "top-end",
        });
      }
    });
  };
  const pedidoMesaActual = global_pedidos.find(
    (objPedido) => objPedido.mesa_id === global_mesa_id
  );

  return (
    <div className="comanda">
      <h4 className="comanda__mesa">
        Mesa: {+objMesa?.number || "Seleccione una mesa"}
      </h4>
      <p className="comanda__usuario">Daniel De La Cruz</p>
      <hr />
      {pedidoMesaActual ? (
        <>
          <PosComandaLista pedidoMesaActual={pedidoMesaActual} />
          <button
            className="btn btn-success"
            onClick={() => {
              pagar();
            }}
          >
            PAGAR
          </button>
        </>
      ) : (
        <span>Mesa libre</span>
      )}
    </div>
  );
};
