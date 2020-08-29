import React, { useReducer } from "react";
import PosReducer from "./posReducer";
import PosContext from "./posContext";

const PosState = (props) => {
  const [state, setState] = useReducer(() => {}, {
                                                    mesa_id: null,
                                                    saludo: "Hola",
                                                  });

  return (
    <PosContext.Provider
      value={{
        global_mesa_id: state.mesa_id,
        global_saludo: state.saludo,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};
export default PosState;
