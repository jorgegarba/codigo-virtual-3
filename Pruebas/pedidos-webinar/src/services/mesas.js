import { URL_BACKEND } from "../utils/variables";

// {
//   "id": 1,
//   "number": "01",
//   "capacity": 5,
//   "description": "Lorem Ipsum es "
// },
export const getMesas = async () => {
  const response = await fetch(`${URL_BACKEND}/List_All_Tables/`);
  const json = await response.json();
  return json;
};
