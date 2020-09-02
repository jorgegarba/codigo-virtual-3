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

  return (
    <PosContext.Provider
      value={{
        globalObjMesa: state.globalObjMesa,
        globalObjCategoria: state.globalObjCategoria,
        globalPedidos: state.globalPedidos,
        seleccionarCategoria: seleccionarCategoria,
        seleccionarMesa: seleccionarMesa,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};
export default PosState;
