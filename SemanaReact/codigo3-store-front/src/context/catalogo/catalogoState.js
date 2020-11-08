import React, { useReducer } from 'react'
import CatalogoContext from './catalogoContext'



const catalogoReducer = (stateActual, action) => {
  if (action.type === "SET_GLOBAL_CATEGORIA") {
    return {
      ...stateActual,
      globalCategoria: action.data
    }
  }

  if (action.type === "ACTUALIZAR_CARRITO") {
    return {
      ...stateActual,
      carrito: action.data
    }
  }
  // cualqueir objeto o valor que retorne el reducer, es el varlo
  // de la nueva variable de de estado
  return stateActual;
}

const CatalogoState = (props) => {

  const [state, dispatch] = useReducer(catalogoReducer, {
    globalCategoria: null,
    carrito: []
  });

  const seleccionarCategoriaGlobal = (objCategoria) => {
    dispatch({
      type: "SET_GLOBAL_CATEGORIA",
      data: objCategoria
    })
  }

  const agregarAlCarrito = (objProducto) => {
    let { carrito } = state;
    /**
     * objProductoCarrito tiene la forma 
     * {
     *  ...objProducto,
     *  cant:0,
     * }
     */
    if (carrito.find(objProductoCarrito => objProductoCarrito.pk === objProducto.pk)) {
      // si hay un producto en carrito como el que queremos aumentar
      carrito = carrito.map(objProductoCarrito => {
        if (objProductoCarrito.pk === objProducto.pk) {
          objProductoCarrito.cant++;
        }
        return objProductoCarrito
      })
    } else {
      // no hya un producto en el carrito como el que queremos aumentar
      carrito.push({
        ...objProducto,
        cant: 1
      })
    }

    dispatch({
      type: "ACTUALIZAR_CARRITO",
      data: [...carrito]
    })

  }


  return (
    <CatalogoContext.Provider value={{
      globalCategoria: state.globalCategoria,
      carrito: state.carrito,
      agregarAlCarrito: agregarAlCarrito,
      seleccionarCategoriaGlobal: seleccionarCategoriaGlobal
    }}>
      {props.children}
    </CatalogoContext.Provider>
  )
}

export default CatalogoState
