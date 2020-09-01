import React, { useReducer } from "react";
import PosReducer from "./posReducer";
import PosContext from "./posContext";

const PosState = (props) => {
  const [state, dispatch] = useReducer(PosReducer, {
    globalObjMesa: null,
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

  return (
    <PosContext.Provider
      value={{
        globalObjMesa: state.globalObjMesa,
        seleccionarMesa: seleccionarMesa,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};
export default PosState;
