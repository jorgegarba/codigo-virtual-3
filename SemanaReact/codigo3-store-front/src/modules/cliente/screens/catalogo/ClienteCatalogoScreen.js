import React from 'react'
import ClienteCarrito from './components/ClienteCarrito'
import ClienteCategorias from './components/ClienteCategorias'
import ClienteProductos from './components/ClienteProductos'

const ClienteCatalogoScreen = () => {
  return (
    <main className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-3">
          <ClienteCategorias />
        </div>
        <div className="col-md-7">
          <ClienteProductos />
        </div>
        <div className="col-md-2">
          <ClienteCarrito />
        </div>
      </div>
    </main>
  )
}

export default ClienteCatalogoScreen
