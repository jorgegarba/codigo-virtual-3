import { URL_BACKEND, API_KEY } from "./variables.js";
// import * as variables from './variables.js';

export const getPopulares = async () => {
  const response = await fetch(`${URL_BACKEND}movie/popular?api_key=${API_KEY}&language=es-PE&page=1`);
  const json = await response.json();
  return json;
};
