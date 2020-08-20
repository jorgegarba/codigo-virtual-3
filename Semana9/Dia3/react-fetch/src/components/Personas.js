import React, { useState } from "react";
import Persona from "./Persona";

const Personas = () => {
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();
    console.log(json);
    // modificar la variable de estado "personas"
    // de modo que, el DOM se re-dibuje
    setPersonas(json.data);
  };
  

  getPersonas();

  return (
    <div className="col-md-8">
      {personas.map(() => {
        return <Persona />;
      })}
    </div>
  );
};

export default Personas;
