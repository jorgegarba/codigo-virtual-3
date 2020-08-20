import React, { useState } from "react";
import Persona from "./Persona";
const Personas = (props) => {

  const [personaId, setPersonaId] = useState(12);

  return (
    <>
      <h5>Lista de personas a la fecha: {props.fecha}</h5>
      <table>
        <thead className="table-header">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {props.arreglo.map((objPersona) => {
            return (
              <Persona
                persona={objPersona}
                key={objPersona.id}
                personaId={personaId}
                setPersonaId={setPersonaId}
              ></Persona>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Personas;
