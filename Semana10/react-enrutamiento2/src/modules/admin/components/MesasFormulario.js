import React, { useState } from "react";
import { postMesa } from "../../../services/mesas";
import Swal from "sweetalert2";

const MesasFormulario = ({ obtenerMesas }) => {
  const [form, setForm] = useState({
    mesa_nro: "",
    mesa_cap: 0,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.mesa_cap > 0 && form.mesa_nro.trim() !== "") {
      // el form está validado
      postMesa(form).then((rpta) => {
        if (rpta.mesa_id) {
          obtenerMesas();
          Swal.fire({
            title: "Hecho!",
            icon: "success",
            text: "Registro creado exitosamente",
            position: "top-end",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Nro. mesa:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="número de mesa"
                  value={form.mesa_nro}
                  name="mesa_nro"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Capacidad:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Capacidad..."
                  name="mesa_cap"
                  onChange={handleChange}
                  value={form.mesa_cap}
                />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary" type="submit">
                  Crear
                </button>
                <button className="btn btn-secondary ml-3" type="button">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesasFormulario;
