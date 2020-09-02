import { useState, useEffect } from "react";
import { URL_BACKEND_HEROKU } from "./../enviroment/enviroment";

export const useFetch = (url) => {
  const [estado, setEstado] = useState({ result: null, loading: true });

  useEffect(() => {
    const hacerFetch = async () => {
      const rpta = await fetch(`${URL_BACKEND_HEROKU}${url}`);
      const json = await rpta.json();
      setEstado({
        result: json,
        loading: false,
      });
    };
    hacerFetch();
  }, [url]);

  return estado;
};
