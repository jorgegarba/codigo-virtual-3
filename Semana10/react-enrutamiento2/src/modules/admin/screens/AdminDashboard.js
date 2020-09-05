import React from "react";
import { useEffect } from "react";
import io from "socket.io-client";
import { URL_BACKEND_HEROKU } from "../../../enviroment/enviroment";
import { useState } from "react";
const AdminDashboard = () => {
  // ir haciendo logica para consuimir sockets del bacjend
  const [reporte, setReporte] = useState({
    pedidos: "cargando...",
    mesas: "cargando...",
    categorias: "cargando...",
  });
  useEffect(() => {
    const socket = io(URL_BACKEND_HEROKU);

    socket.on("connect", () => {
      // emit("evento") => disparar un mensaje hacia el socket backend
      socket.emit("peticion-reporte-dashboard");
    });

    socket.on("reporte-dashboard", (dataString) => {
      const dataJSON = JSON.parse(dataString);
      console.log(dataString);
      setReporte(dataJSON);
      /**
       * {
       *  pedidos: 5,
       *  mesas: 7,
       *  categorias: 9
       * }
       */
    });
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h1 className="display-4 text-center">DASHBOARD</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header">
              <h5 className="card-title text-center">Pedidos</h5>
            </div>
            <div className="card-body">
              <h5 className="display-4 text-center">{reporte.pedidos}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header">
              <h5 className="card-title text-center">Mesas</h5>
            </div>
            <div className="card-body">
              <h5 className="display-4 text-center">{reporte.mesas}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header">
              <h5 className="card-title text-center">Categorias</h5>
            </div>
            <div className="card-body">
              <h5 className="display-4 text-center">{reporte.categorias}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
