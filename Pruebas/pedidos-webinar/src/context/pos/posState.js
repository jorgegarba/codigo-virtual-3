import React, { useReducer } from "react";

import PosReducer from "./posReducer";
import PosContext from "./posContext";

const PosState = (props) => {
  const estadoInicial = {
    global_mesa_id: null,
    global_categoria_id: 0,
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
   *      precio: 75.00,
   *      nombre:
   *    },
   *    {
   *      plato_id:5,
   *      cant: 1,
   *      precio: 10.00
   *      nombre:
   *    }
   *  ]
   * }
   */
  const sumarPedido = (
    accion,
    { id: plato_id, price: plato_pre, name: plato_nom }
  ) => {
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
        console.log("encontramos un plato previo");

        // AGREGAR_CANTIDAD_PLATO_PEDIDO

        const globalPedidosNuevo = [
          ...state.global_pedidos.map((objPedido) => {
            if (+objPedido.mesa_id === +state.global_mesa_id) {
              objPedido.platos.forEach((objPlato) => {
                if (+objPlato.plato_id === +plato_id) {
                  objPlato.precio =
                    (objPlato.precio / objPlato.cant) * (objPlato.cant + 1);
                  objPlato.cant = objPlato.cant + 1;
                }
              });
              return objPedido;
            }
            return objPedido;
          }),
        ];

        dispatch({
          type:
            accion === "sumar"
              ? "AGREGAR_CANTIDAD_PLATO_PEDIDO"
              : "RESTAR_CANTIDAD_PLATO_PEDIDO",
          payload: globalPedidosNuevo,
        });
        return;
      } else {
        // AGREGAR_PLATO_PEDIDO

        const globalPedidosNuevo = [
          ...state.global_pedidos.map((objPedido) => {
            if (+objPedido.mesa_id === +state.global_mesa_id) {
              objPedido.platos.push({
                plato_id: +plato_id,
                cant: 1,
                precio: +plato_pre,
                nombre: plato_nom,
              });
              return objPedido;
            }
            return objPedido;
          }),
        ];
        dispatch({
          type: "AGREGAR_PLATO_PEDIDO",
          payload: globalPedidosNuevo,
        });
      }
    } else {
      dispatch({
        type: "AGREGAR_PEDIDO",
        payload: {
          plato_id,
          plato_pre,
          plato_nom,
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
        global_pedidos: state.global_pedidos,
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
