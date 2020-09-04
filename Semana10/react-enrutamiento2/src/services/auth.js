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

export const postVerificar = async (token) => {
  const response = await fetch(`${URL_BACKEND_HEROKU}/verificar`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json.ok;
};

export const postLogin = async (correo, password) => {
  const response = await fetch(`${URL_BACKEND_HEROKU}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      correo: correo,
      password: password,
    }),
  });
  const json = await response.json();
  return json;
};
