import React, { useContext, useEffect, useState } from 'react'
import CatalogoContext from '../../../../../context/catalogo/catalogoContext';
import { getCategorias } from '../../../../../services/categoriasServices'
import "./ClienteCategorias.css";


const ClienteCategorias = () => {

  const { globalCategoria, seleccionarCategoriaGlobal } = useContext(CatalogoContext);
  const [categorias, setCategorias] = useState([]);

  console.log(globalCategoria);

  const traerCategorias = async () => {
    const data = await getCategorias();
    setCategorias(data);
  }

  useEffect(() => {
    traerCategorias();
  }, []);



  return (
    <ul className="list-group shadow">
      {
        categorias.map(objCategoria => {
          return (
            <li className="categoria__producto list-group-item d-flex justify-content-between align-items-center"
              key={objCategoria.pk} onClick={() => {
                seleccionarCategoriaGlobal(objCategoria);
              }}>
              <img src={objCategoria.image} alt="" height="40" className="rounded shadow" />
              {
                objCategoria.name
              }
              <span className="badge badge-danger badge-pill">{objCategoria.product.length}</span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ClienteCategorias
