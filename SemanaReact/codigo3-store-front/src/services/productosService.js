import { URL_BACKEND } from "../environments/environments"

export const getProductos = async () => {

  const peticion = await fetch(`${URL_BACKEND}/List_All_Products`)
  const data = await peticion.json();
  return data;
}