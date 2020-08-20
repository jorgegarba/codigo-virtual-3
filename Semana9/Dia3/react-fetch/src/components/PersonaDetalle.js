import React from "react";
import Persona from "./Persona";

const PersonaDetalle = ({ personaSeleccionada }) => {
  console.log(personaSeleccionada);

  return personaSeleccionada ? (
    // A continuación estamos reutilizando un Componente
    <Persona objPersona={personaSeleccionada} />
  ) : (
    <div className="col-md-4">Seleccione una persona.</div>
  );
};

export default PersonaDetalle;

// if(personaSeleccionada){
//   return (<div className="col-md-4">Sí hay una persona seleccionada</div>)
// }  else{
//   return (<div className="col-md-4">Seleccione una persona.</div>)
// }
