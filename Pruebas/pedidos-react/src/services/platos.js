import { URL_BACKEND } from "../utils/variables";

export const getPlatos = async () => {
  const response = await fetch(`${URL_BACKEND}/platos`);
  const json = await response.json();
  return json;
};
