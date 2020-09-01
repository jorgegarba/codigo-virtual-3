import React, { useReducer } from "react";

/**
 *
 * @param {*} estadoActual Una copia del estado actual "state"
 * @param {*} payload La data que envía aquel que intente modificar el state
 * OJO: Todo lo que retorne el REDUCER, será el NUEVO STATE
 */
const reducer = (estadoActual, payload) => {
  switch (payload.action) {
    case "SUMAR":
      return {
        ...estadoActual,
        contador: estadoActual.contador + payload.valor,
      };
    case "RESTAR":
      return {
        ...estadoActual,
        contador: estadoActual.contador - payload.valor,
      };
    default:
      // por defecto, si sucede algún error, retonar el mismo estado
      return { ...estadoActual };
  }
};

const ComponenteD = () => {
  const [state, dispatch] = useReducer(reducer, {
    contador: 1,
    fecha: "31/08/2020",
  });

  return (
    <div>
      <hr />
      <strong>Componente D</strong> <br />
      <button
        onClick={() => {
          dispatch({
            valor: 5,
            action: "SUMAR",
          });
        }}
      >
        Sumar
      </button>
      <strong>Contador: {state.contador}</strong>
      <button
        onClick={() => {
          dispatch({
            valor: 3,
            action: "RESTAR",
          });
        }}
      >
        Restar
      </button>
      <hr />
    </div>
  );
};

export default ComponenteD;
