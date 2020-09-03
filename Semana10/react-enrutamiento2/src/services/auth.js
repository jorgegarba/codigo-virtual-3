import { URL_BACKEND_HEROKU } from "../enviroment/enviroment";

export const postRegister = async (objUsuario) => {
  const response = await fetch(`${URL_BACKEND_HEROKU}/registro`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objUsuario),
  });
  const json = await response.json();
  return json;
};
