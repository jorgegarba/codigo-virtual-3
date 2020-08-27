import React, { useState, useEffect } from "react";
import MesasFormulario from "../components/MesasFormulario";
import MesasTabla from "../components/MesasTabla";
import { getMesas } from "../../../services/mesas";

const AdminMesas = () => {
  const [mesas, setMesas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modo, setModo] = useState("crear");
  const [mesa, setMesa] = useState({});

  const obtenerMesas = () => {
    getMesas().then((rpta) => {
      setMesas(rpta);
      setLoading(false);
    });
  };

  useEffect(() => {
    obtenerMesas();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Mantenimiento de Mesas</h1>
        </div>
      </div>
      <MesasFormulario
        obtenerMesas={obtenerMesas}
        modo={modo}
        mesa={mesa}
        setModo={setModo}
        setMesa={setMesa}
      />
      <MesasTabla
        mesas={mesas}
        loading={loading}
        obtenerMesas={obtenerMesas}
        setMesa={setMesa}
        setModo={setModo}
      />
    </>
  );
};

export default AdminMesas;
