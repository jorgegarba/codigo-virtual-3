import React, { useContext, useEffect, useState } from 'react'
import CatalogoContext from '../../../../../context/catalogo/catalogoContext'
import { getProductos } from '../../../../../services/productosService';
import ClienteProducto from './ClienteProducto'

const ClienteProductos = () => {

  const { globalCategoria } = useContext(CatalogoContext);
  const [productos, setProductos] = useState([]);

  const traerProductos = async () => {
    const data = await getProductos();
    setProductos(data);
  }
  useEffect(() => {
    traerProductos();
  }, [])

  return (
    <div className="row">
      {
        globalCategoria ? globalCategoria.product.map(objProducto => {
          return <ClienteProducto key={objProducto.pk} objProducto={objProducto} />
        }) :
          productos.map(objProducto => {
            return <ClienteProducto key={objProducto.pk} objProducto={objProducto} />
          })
      }
    </div>
  )
}

export default ClienteProductos
