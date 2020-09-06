import { URL_BACKEND } from "../utils/variables";

export const getCategorias = async () => {
  const response = await fetch(`${URL_BACKEND}/categorias`);
  const json = await response.json();
  return json;
};
