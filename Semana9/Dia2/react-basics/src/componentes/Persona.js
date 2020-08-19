import React from "react";

const Persona = (props) => {
  console.log(props.personaId);
  return (
    <tr className={props.personaId === props.persona.id ? "row-active" : ""}>
      <td>{props.persona.id}</td>
      <td>{props.persona.first_name}</td>
      <td>{props.persona.last_name}</td>
      <td>{props.persona.email}</td>
      <td>{props.persona.avatar}</td>
    </tr>
  );
};

export default Persona;
