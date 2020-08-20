import React from "react";

const Persona = (props) => {
  
  const clickFila = (e) => {
    props.setPersonaId(props.persona.id);
  };

  return (
    <tr
      className={props.personaId === props.persona.id ? "row-active" : ""}
      onClick={clickFila}
    >
      <td>{props.persona.id}</td>
      <td>{props.persona.first_name}</td>
      <td>{props.persona.last_name}</td>
      <td>{props.persona.email}</td>
      <td>{props.persona.avatar}</td>
    </tr>
  );
};

export default Persona;
