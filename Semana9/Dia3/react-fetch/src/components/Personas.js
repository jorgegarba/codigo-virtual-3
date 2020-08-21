import React, { useState, useEffect } from "react";
import Persona from "./Persona";
import { getPersonas } from "../services/services";

const Personas = ({ setPersonaSeleccionada }) => {
  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // PROBLEMA: cada vez que se actualiza una variable de estado
  // se ejecuta toda la funcinoalidad del componente nuevamente.
  // SOLUCION: usar useEffect()
  useEffect(() => {
    getPersonas(page).then((rpta) => {
      setPersonas(rpta.data);
      setTotalPages(rpta.total_pages);
    });
    // cuando el arreglo de dependencias está vacío, el useEffect
    // sólo se ejecuta 1 sola vez
    // NOTA: useEffect se ejecuta por lo menos 1 vez (cuando el componente
    // carga por primera vez.)
    // NOTA: Cuando existe una o más variables en el arreglo de dependencias
    // la función dentro de useEffect, se ejecutará cada vez que cualquiera de
    // las variables dependientes, sufran una modificación a su valor anterior.
  }, [page]);
  const anterior = () => {
    setPage(page - 1);
  };
  const siguiente = () => {
    setPage(page + 1);
  };

  return (
    <div className="col-md-8">
      <div className="row justify-content-center mb-3">
        <div className="col-md-2">
          <button
            className="btn btn-danger btn-block"
            onClick={anterior}
            disabled={page === 1}
          >
            Anterior
          </button>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-danger btn-block"
            onClick={siguiente}
            disabled={totalPages === page}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="row">
        {personas.map((objPersona) => {
          return (
            <Persona
              objPersona={objPersona}
              key={objPersona.id}
              setPersonaSeleccionada={setPersonaSeleccionada}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Personas;
