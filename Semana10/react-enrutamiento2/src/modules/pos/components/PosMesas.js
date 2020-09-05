import React, { useState, useEffect } from "react";
import PosMesaItem from "./PosMesaItem";
import PosCargando from "./PosCargando";
import { getMesas } from "../../../services/mesas";
import io from "socket.io-client";
import { URL_BACKEND_HEROKU } from "../../../enviroment/enviroment";

const PosMesas = () => {
  const [mesas, setMesas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cuando el socket se instancia, automáticamente es conectado al backend
    const socket = io(URL_BACKEND_HEROKU);
    socket.on("connect", () => {
      console.log("CONECTADO! =)");
    });
    socket.on("mesas-lista", (mesasString) => {
      const mesasJSON = JSON.parse(mesasString);
      setMesas(mesasJSON);
    });
    socket.on("disconnect", () => {
      console.log("DESCONECTADO =(");
    });
  }, []);

  useEffect(() => {
    getMesas().then((rpta) => {
      if (rpta.ok) {
        setMesas(rpta.content);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="mesas">
      <ul className="mesas__lista">
        {loading && <PosCargando />}
        {!loading &&
          mesas.map((objMesa) => {
            return <PosMesaItem objMesa={objMesa} key={objMesa.mesa_id} />;
          })}
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
};

export default PosMesas;
