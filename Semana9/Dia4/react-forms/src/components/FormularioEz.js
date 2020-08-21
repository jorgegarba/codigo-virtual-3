import React, { useState } from "react";

const FormularioEz = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [pais, setPais] = useState("01");

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleApellido = (e) => {
    setApellido(e.target.value);
  };
  const handlePais = (e) => {
    setPais(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(apellido);
        console.log(pais);
      }}
    >
      <div className="form-group">
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleNombre}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Apellido:</label>
        <input
          type="text"
          className="form-control"
          name="apellido"
          value={apellido}
          onChange={handleApellido}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">País de residencia:</label>
        <select
          className="form-control"
          name="pais"
          value={pais}
          onChange={handlePais}
        >
          <option value="">--Seleccione País--</option>
          <option value="01">Perú</option>
          <option value="02">Bolivia</option>
          <option value="03">Uruguay</option>
        </select>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default FormularioEz;
