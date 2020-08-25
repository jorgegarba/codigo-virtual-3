import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { getMesas } from "../../../services/mesas";

const MesasTabla = () => {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    getMesas().then((rpta) => {
      setMesas(rpta);
    });
  }, []);

  const eliminarMesaById = (mesa_id) => {
    console.log(mesa_id);
    console.log(`Eliminando ${mesa_id}`);
  };

  const editarMesaById = () => {};

  const datatable = {
    columns: [
      { label: "ID", field: "mesa_id" },
      { label: "Nro mesa", field: "mesa_nro" },
      { label: "Capacidad", field: "mesa_cap" },
      { label: "Acciones", field: "mesa_acciones" },
    ],
    rows: mesas.map((objMesa) => {
      return {
        ...objMesa,
        mesa_cap: objMesa.mesa_cap + " personas",
        mesa_acciones: (
          <>
            <button
              className="btn btn-danger"
              onClick={() => {
                eliminarMesaById(objMesa.mesa_id);
              }}
            >
              Eliminar
            </button>
            <button className="btn btn-warning ml-2">Editar</button>
          </>
        ),
      };
    }),
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={datatable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesasTabla;
