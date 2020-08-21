export const getPersonas = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  let json = await response.json();
  return json;
};
