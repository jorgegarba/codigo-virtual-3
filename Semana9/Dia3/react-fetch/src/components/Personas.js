import React, { useState, useEffect } from "react";
import Persona from "./Persona";

const Personas = ({ setPersonaSeleccionada }) => {
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();
    // modificar la variable de estado "personas"
    // de modo que, el DOM se re-dibuje
    return json.data;
  };
  // PROBLEMA: cada vez que se actualiza una variable de estado
  // se ejecuta toda la funcinoalidad del componente nuevamente.
  // SOLUCION: usar useEffect()
  useEffect(() => {
    getPersonas().then((arregloPersonas) => {
      setPersonas(arregloPersonas);
    });
    // cuando el arreglo de dependencias está vacío, el useEffect
    // sólo se ejecuta 1 sola vez
    // NOTA: useEffect se ejecuta por lo menos 1 vez (cuando el componente
    // carga por primera vez.)
  }, []);

  return (
    <div className="col-md-8">
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
