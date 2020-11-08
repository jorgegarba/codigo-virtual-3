import { URL_BACKEND } from "../environments/environments"


export const getCategorias = async () => {
  const peticion = await fetch(`${URL_BACKEND}/List_Category_Products`);
  const data = await peticion.json();
  return data;
}

// export const getProductosByCategoriaPk = async () => {
//   const peticion = await fetch(`${URL_BACKEND}/`)
// }