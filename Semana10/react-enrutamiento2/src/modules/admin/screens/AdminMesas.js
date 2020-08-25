import React from "react";
import MesasFormulario from "../components/MesasFormulario";
import MesasTabla from "../components/MesasTabla";

const AdminMesas = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Mantenimiento de Mesas</h1>
        </div>
      </div>
      <MesasFormulario />
      <MesasTabla />
    </>
  );
};

export default AdminMesas;
