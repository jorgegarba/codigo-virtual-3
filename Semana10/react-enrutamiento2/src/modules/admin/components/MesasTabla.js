import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { deleteMesaById } from "../../../services/mesas";
import Swal from "sweetalert2";
import Cargando from "./Cargando";

const MesasTabla = ({ mesas, loading, obtenerMesas, setMesa, setModo }) => {
  const eliminarMesaById = (mesa_id) => {
    Swal.fire({
      icon: "error",
      text: "Los cambios son irreversibles",
      title: "¿Seguro que desea eliminar el registro?",
      showCancelButton: true,
      confirmButtonText: "ELIMINAR",
      confirmButtonColor: "#de0a0a",
    }).then((rpta) => {
      if (rpta.value) {
        //sí, eliminar
        deleteMesaById(mesa_id).then((rpta) => {
          if (rpta.mesa_id) {
            obtenerMesas();
            Swal.fire({
              icon: "success",
              title: "Eliminado correctamente",
              timer: 1500,
              position: "top-end",
              showConfirmButton: false,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Hubieron errores en el servidor",
            });
          }
        });
      }
    });
  };

  const editarMesaById = (objMesa) => {
    setModo("editar");
    setMesa(objMesa);
  };

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
            <button
              className="btn btn-warning ml-2"
              onClick={() => {
                editarMesaById(objMesa);
              }}
            >
              Editar
            </button>
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
            {loading ? (
              <Cargando texto="Cargando los datos" />
            ) : (
              <MDBDataTableV5
                searchLabel={"Buscar"}
                infoLabel={["Mostrando", "al", "de", "registros"]}
                hover
                striped
                bordered
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesasTabla;
