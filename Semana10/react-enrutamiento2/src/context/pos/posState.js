import React, { useReducer } from "react";
import PosReducer from "./posReducer";
import PosContext from "./posContext";

const PosState = (props) => {
  const [state, dispatch] = useReducer(PosReducer, {
    globalObjMesa: null,
    globalObjCategoria: null,
    globalPedidos: [
      {
        mesa_id: 1,
        pedido_nro: "800",
        pedido_est: "pagado",
        pedidoplatos: [
          {
            plato_id: 1,
            pedidoplato_cant: 5,
          },
          {
            plato_id: 2,
            pedidoplato_cant: 1,
          },
        ],
      },
      {
        mesa_id: 2,
        pedido_nro: "900",
        pedido_est: "pagado",
        pedidoplatos: [
          {
            plato_id: 1,
            pedidoplato_cant: 5,
          },
          {
            plato_id: 2,
            pedidoplato_cant: 1,
          },
        ],
      },
    ],
  });

  /**
   * A continuación, la lista de funciones que intentarán modificar el estado
   */

  const seleccionarMesa = (objMesa) => {
    dispatch({
      type: "SELECCIONAR_MESA",
      data: { ...objMesa },
    });
  };

  const seleccionarCategoria = (objCategoria) => {
    dispatch({
      type: "SELECCIONAR_CATEGORIA",
      data: { ...objCategoria },
    });
  };

  const incrementarPlato = (plato_id) => {
    const { globalObjMesa, globalPedidos } = state;
    // preguntamos si no tenemos una mesa global seleccionada
    if (!globalObjMesa) return;
    // buscar el pedido de la mesa seleccionada, es posible que la mesa
    // seleccionada no tenga pedidos aún, como es posible que tenga pedidos
    const pedidoActual = globalPedidos.find(
      (objPedido) => objPedido.mesa_id === globalObjMesa.mesa_id
    );
    // si la mesa actual seleccionada tiene un pedido activo
    if (pedidoActual) {
      let pedidoPlato = pedidoActual.pedidoplatos.find(
        (objPedidoPlato) => objPedidoPlato.plato_id === plato_id
      );
      //la mesa sí tenía un pedido.
      // pero.... ¿Tenía el pedido un plato con el plato_id que queremos incrementar?
      if (pedidoPlato) {
        // sí tenía un plato
        const globalPedidosNuevo = [
          ...globalPedidos.map((objPedido) => {
            if (objPedido.mesa_id === globalObjMesa.mesa_id) {
              objPedido.pedidoplatos.forEach((objPlato) => {
                if (objPlato.plato_id === plato_id) {
                  objPlato.pedidoplato_cant += 1;
                }
              });
              return objPedido;
            }
            // DE TODAS FORMAS, MAP tiene que retornar un objeto
            return objPedido;
          }),
        ];
        dispatch({
          type: "ACTUALIZAR_GLOBAL_PEDIDOS",
          data: globalPedidosNuevo,
        });
      }
    } else {
      // si la mesa actual seleccionada no tuviera ningun pedido
    }
  };

  return (
    <PosContext.Provider
      value={{
        globalObjMesa: state.globalObjMesa,
        globalObjCategoria: state.globalObjCategoria,
        globalPedidos: state.globalPedidos,
        seleccionarCategoria: seleccionarCategoria,
        seleccionarMesa: seleccionarMesa,
        incrementarPlato: incrementarPlato,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};
export default PosState;
