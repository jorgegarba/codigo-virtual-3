import { URL_BACKEND, API_KEY } from "./variables.js";
// import * as variables from './variables.js';

export const getPopulares = async () => {
  const response = await fetch(
    `${URL_BACKEND}movie/popular?api_key=${API_KEY}&language=es-PE&page=1`
  );
  const json = await response.json();
  return json;
};

export const limitarCaracteres = ({ title, overview }) => {
  if (title.length >= 40) {
    return overview.substr(0, 50) + " <a href='#'>Ver mas...</a>";
  } else {
    return overview.substr(0, 100) + " <a href='#'>Ver mas...</a>";
  }
};
