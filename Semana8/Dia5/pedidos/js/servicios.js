import { URL_BACKEND } from "./variables.js";
export const getResourceAll = async (recurso) => {
  const response = await fetch(`${URL_BACKEND}/${recurso}`);
  const json = await response.json();
  return json;
};
