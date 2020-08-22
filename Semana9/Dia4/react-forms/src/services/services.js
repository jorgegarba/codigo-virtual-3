import axios from "axios";

const URL = "https://5f35f3e65b91f60016ca524a.mockapi.io";

export const getCategorias = async () => {
  let response = await axios.get(`${URL}/categorias`);
  return response;
};

export const postPlato = async (objPlato) => {
  let response = await axios({
    method: "POST",
    data: {
      ...objPlato,
      plato_pre: +objPlato.plato_pre,
    },
    url: `${URL}/platos`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};
