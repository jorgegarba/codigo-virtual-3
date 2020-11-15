import React, { useContext } from 'react'
import CatalogoContext from '../../../../../context/catalogo/catalogoContext'

const ClienteCarrito = () => {

  const { carrito } = useContext(CatalogoContext);

  return (
    <>
      <h5 className="text-center text-danger">Carrito de Compras</h5>
      <hr />
      <ul className="list-group shadow">
        {
          carrito.map(objProductoCarrito => (
            <li className="categoria__producto list-group-item d-flex justify-content-between align-items-center"
              key={objProductoCarrito.pk}>
              <img src={objProductoCarrito.image} alt="" height="40" className="rounded shadow" />
              {objProductoCarrito.name}
              <span className="badge badge-danger badge-pill">{objProductoCarrito.cant}</span>
            </li>
          ))
        }

      </ul>
    </>
  )
}

export default ClienteCarrito
