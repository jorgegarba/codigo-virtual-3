import React, { useContext } from "react";
import { CopmonenteC } from "./CopmonenteC";
import { GlobalContext } from "../App2";

const ComponenteB = () => {
  const localGlobalContext = useContext(GlobalContext);
  const { usuario } = localGlobalContext;
  return (
    <div>
      <strong>Componente B:</strong> <br />
      Usuario: {usuario}
      <hr />
      <CopmonenteC />
    </div>
  );
};

export default ComponenteB;
