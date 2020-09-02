import { URL_BACKEND_HEROKU } from "../enviroment/enviroment";

/**
 * Funcion que obtiene los platos de una categoria
 * dado el id de la categoria
 * @param {*} categoria_id
 */
export const getPlatosByCategoriaId = async (categoria_id) => {
  const response = await fetch(
    `${URL_BACKEND_HEROKU}/categoria/${categoria_id}/platos`
  );
  const json = await response.json();
  return json;
};
