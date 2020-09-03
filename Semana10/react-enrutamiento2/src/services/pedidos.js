import { URL_BACKEND_HEROKU } from "../enviroment/enviroment";

export const getPedidos = async () => {
  const response = await fetch(`${URL_BACKEND_HEROKU}/pedido`);
  const json = response.json();
  return json;
};

export const getPedidosById = async (pedido_id) => {
  const response = await fetch(`${URL_BACKEND_HEROKU}/pedido/${pedido_id}`);
  const json = response.json();
  return json;
};

export const posPedido = async (objPedido) => {
  const response = await fetch(`${URL_BACKEND_HEROKU}/pedido`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objPedido),
  });
  const json = response.json();
  return json;
};
