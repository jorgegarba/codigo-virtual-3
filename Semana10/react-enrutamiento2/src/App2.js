import React, { createContext, useState } from "react";
import ComponenteA from "./prueba-context/ComponenteA";
import ComponenteD from "./prueba-context/ComponenteD";

export const GlobalContext = createContext();

const App2 = () => {
  const [state, setState] = useState({ usuario: "Jorge", fecha: "31/08/2020" });
  return (
    <GlobalContext.Provider
      value={{
        usuario: state.usuario,
        fecha: state.fecha,
        cambiarEstado: setState,
      }}
    >
      <ComponenteA />
      <ComponenteD />
    </GlobalContext.Provider>
  );
};

export default App2;
