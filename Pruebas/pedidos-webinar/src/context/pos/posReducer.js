const PosReducer = (state, action) => {
  switch (action.type) {
    case "CAMBIAR_MESA_ACTUAL":
      // el valor que retorne, será el nuevo STATE
      return {
        ...state,
        global_mesa_id: +action.payload,
      };
    case "CAMBIAR_CATEGORIA_ACTUAL":
      // el valor que retorne, será el nuevo STATE
      return {
        ...state,
        global_categoria_id: +action.payload,
      };
    case "AGREGAR_PEDIDO":
      return {
        ...state,
        global_pedidos: [
          ...state.global_pedidos,
          {
            mesa_id: state.global_mesa_id,
            platos: [
              {
                plato_id: action.payload.plato_id,
                cant: 1,
                precio: action.payload.plato_pre,
                nombre: action.payload.plato_nom,
              },
            ],
          },
        ],
      };
    case "AGREGAR_CANTIDAD_PLATO_PEDIDO":
      return {
        ...state,
        global_pedidos: [...action.payload],
        // global_pedidos: 2,
      };
    case "AGREGAR_PLATO_PEDIDO":
      return {
        ...state,
        global_pedidos: [...action.payload],
        // global_pedidos: 1,
      };
    default:
      return { ...state };
  }
};

export default PosReducer;
