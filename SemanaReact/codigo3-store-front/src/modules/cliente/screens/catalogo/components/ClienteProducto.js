import React, { useContext } from 'react'
import CatalogoContext from '../../../../../context/catalogo/catalogoContext';

const ClienteProducto = ({ objProducto }) => {

  const { agregarAlCarrito } = useContext(CatalogoContext);

  return (
    <div className="col-md-3 col-lg-4 mb-3">
      <div className="card shadow">
        <img src={objProducto.image} alt=""
          className="card-img-top p-4" height="250"
          style={{
            objectFit: "contain"
          }} />
        <div className="card-body">
          <h4 className="card-title">{objProducto.name}</h4>
          <p className="card-text">
            Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
            Quis perspiciatis expedita quibusdam! Eveniet eligendi,
            quis inventore soluta, aliquid doloremque perferendis architecto
            dolore fugiat sint nobis! Ipsum corrupti quaerat incidunt quae!
          </p>
          <p className="card-text text-center">
            S/. {objProducto.price}
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-block btn-outline-danger" onClick={() => {
            agregarAlCarrito(objProducto);
          }}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClienteProducto
