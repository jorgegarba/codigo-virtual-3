import React, { useContext } from "react";
import { GlobalContext } from "./../App2";
export const CopmonenteC = () => {
  const localGlobalContext = useContext(GlobalContext);

  const { usuario, cambiarEstado } = localGlobalContext;

  return (
    <div>
      <strong> Componente C:</strong>
      <hr />
      Usuario: {usuario} <br />
      <button
        onClick={() => {
          cambiarEstado((estadoAntiguo) => {
            return {
              ...estadoAntiguo,
              usuario: "Felipe",
            };
          });
        }}
      >
        Cambiar nombre a "Felipe"
      </button>
    </div>
  );
};
