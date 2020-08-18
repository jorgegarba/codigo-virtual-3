import { URL_BACKEND } from "./variables.js";
export const getResourceAll = async (recurso) => {
  const response = await fetch(`${URL_BACKEND}/${recurso}`);
  const json = await response.json();
  return json;
};

export const postPedidos = async (objPedido) => {
  // let misHeaders = new Headers();
  // misHeaders.append("Content-type", "application/json");

  const response = await fetch(`${URL_BACKEND}/pedidos`, {
    method: "POST",
    // headers: misHeaders,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objPedido),
  });
  const json = await response.json();
  return json;
};
