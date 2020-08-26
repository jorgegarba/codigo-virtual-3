import { URL_BACKEND } from "../enviroment/enviroment";

export const getMesas = async () => {
  const response = await fetch(`${URL_BACKEND}/mesas`);
  const json = await response.json();
  return json;
};

export const deleteMesaById = async (mesa_id) => {
  const response = await fetch(`${URL_BACKEND}/mesas/${mesa_id}`, {
    method: "DELETE",
  });
  const json = await response.json();
  return json;
};

export const postMesa = async (objMesa) => {
  const response = await fetch(`${URL_BACKEND}/mesas`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objMesa),
  });
  const json = await response.json();
  return json;
};
