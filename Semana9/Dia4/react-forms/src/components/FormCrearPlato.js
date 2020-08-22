import React, { useState, useEffect } from "react";
import { getCategorias, postPlato } from "../services/services";
import Swal from "sweetalert2";

const initialState = {
  plato_nom: "",
  plato_img: "",
  plato_pre: 0,
  categoria_id: "",
};

const FormCrearPlato = () => {
  const [categorias, setCategorias] = useState([]);
  const [form, setForm] = useState(initialState);

  const { plato_img, plato_nom, plato_pre, categoria_id } = form;

  useEffect(() => {
    getCategorias().then((arregloCategorias) => {
      console.log(arregloCategorias.data);
      setCategorias(arregloCategorias.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validar el formulario
    postPlato(form).then((respuesta) => {
      if (respuesta.status === 201) {
        setForm(initialState);
        Swal.fire({
          icon: "success",
          timer: 1500,
          title: "Creado!",
          text: "Registro creado correctamente",
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Nombre del Plato:</label>
            <input
              type="text"
              className="form-control"
              name="plato_nom"
              value={plato_nom}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">URL:</label>
            <textarea
              name="plato_img"
              className="form-control"
              cols="30"
              rows="10"
              value={plato_img}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="">Precio del Plato:</label>
            <input
              type="number"
              value={plato_pre}
              className="form-control"
              name="plato_pre"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Categoría del Plato:</label>
            <select
              className="form-control"
              name="categoria_id"
              value={categoria_id}
              onChange={handleChange}
            >
              <option value="">--Seleccione Categoría--</option>
              {categorias.map((objCategoria) => {
                return (
                  <option
                    key={objCategoria.categoria_id}
                    value={objCategoria.categoria_id}
                  >
                    {objCategoria.categoria_nom}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Crear Plato
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCrearPlato;
