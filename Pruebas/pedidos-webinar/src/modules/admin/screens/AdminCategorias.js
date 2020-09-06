import React from "react";
const AdminCategorias = () => {
  return (
    <section className="categorias">
      <div className="categorias__titulo">
        <h1>Mantenimiento de Categorias</h1>
      </div>
      <hr />
      <div className="categorias__formulario">
        <form className="formulario">
          <label htmlFor="">Nombre:</label>
          <input
            type="text"
            className="formulario__input"
            placeholder="Ingrese nombre de la categoria"
          />
          <label htmlFor="">Nombre:</label>
          <input
            type="text"
            className="formulario__input"
            placeholder="Ingrese nombre de la categoria"
          />
          <label htmlFor="">Nombre:</label>
          <input
            type="number"
            className="formulario__input"
            placeholder="Ingrese nombre de la categoria"
          />

          <button className="formulario__submit" type="submit">
            Crear Registro
          </button>
        </form>
      </div>
      <div className="categorias__tabla">
        <table className="tabla">
          <thead>
            <tr>
              <th>Cabecera</th>
              <th>Cabecera</th>
              <th>Cabecera</th>
              <th>Cabecera</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
            </tr>
            <tr>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
            </tr>
            <tr>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
            </tr>
            <tr>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
              <td>Columna</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminCategorias;
