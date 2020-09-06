import { URL_BACKEND } from "../utils/variables";

export const getPlatos = async () => {
  const response = await fetch(`${URL_BACKEND}/platos`);
  const json = await response.json();
  return json;
};

/**
 *
 * @param {*} id de categoria
 */
export const getPlatosPorCategoria = async (id) => {
  const response = await fetch(`${URL_BACKEND}/Category_Item_id/${id}`);
  if (response.status === 404) {
    throw "404";
  }
  const json = await response.json();
  return json;
};
