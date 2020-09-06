import React, { useReducer } from "react";

import PosReducer from "./posReducer";
import PosContext from "./posContext";

const PosState = (props) => {
  const estadoInicial = {
    global_mesa_id: null,
    global_categoria_id: null,
    global_pedidos: [],
  };
  const [state, dispatch] = useReducer(PosReducer, estadoInicial);
  const setMesaActual = (id) => {
    dispatch({
      type: "CAMBIAR_MESA_ACTUAL",
      payload: id,
    });
  };
  const setCategoriaActual = (id) => {
    dispatch({
      type: "CAMBIAR_CATEGORIA_ACTUAL",
      payload: id,
    });
  };
  /**
   * objPedido
   * {
   *  mesa_id:5,
   *  platos:[
   *    {
   *      plato_id:1,
   *      cant: 3,
   *      precio: 75.00
   *    },
   *    {
   *      plato_id:5,
   *      cant: 1,
   *      precio: 10.00
   *    }
   *  ]
   * }
   */
  const sumarPedido = (accion, { plato_id, plato_pre }) => {
    if (!state.global_mesa_id) {
      return;
    }
    const pedidoMesaActual = state.global_pedidos.find(
      (objPedido) => objPedido.mesa_id === state.global_mesa_id
    );
    if (pedidoMesaActual) {
      let platoPedidoMesaActual = pedidoMesaActual.platos.find(
        (objPlato) => +objPlato.plato_id === +plato_id
      );
      if (platoPedidoMesaActual) {
        // platoPedidoMesaActual.cant = platoPedidoMesaActual.cant + 1;
        // platoPedidoMesaActual.precio = plato_pre + platoPedidoMesaActual.cant;
        dispatch({
          type:
            accion === "sumar"
              ? "AGREGAR_CANTIDAD_PLATO_PEDIDO"
              : "RESTAR_CANTIDAD_PLATO_PEDIDO",
          payload: {
            plato_id,
          },
        });
        return;
      } else {
        dispatch({
          type: "AGREGAR_PLATO_PEDIDO",
          payload: {
            plato_id,
            plato_pre,
          },
        });
      }
    } else {
      dispatch({
        type: "AGREGAR_PEDIDO",
        payload: {
          plato_id,
          plato_pre,
        },
      });
    }
  };


  
  // const restarPedido = (plato_id) => {};
  return (
    <PosContext.Provider
      value={{
        global_mesa_id: state.global_mesa_id,
        global_categoria_id: state.global_categoria_id,
        setMesaActual,
        setCategoriaActual,
        sumarPedido,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};

export default PosState;
