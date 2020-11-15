import { URL_BACKEND } from "../environments/environments"

export const postLogin = async (objAuth) => {

  const peticion = await fetch(`${URL_BACKEND}/Login/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(objAuth)
  });
  const rpta = await peticion.json();
  return rpta;
}