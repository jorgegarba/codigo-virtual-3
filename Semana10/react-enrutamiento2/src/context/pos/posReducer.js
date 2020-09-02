const PosReducer = (stateActual, action) => {
  switch (action.type) {
    case "SELECCIONAR_MESA":
      return {
        ...stateActual,
        globalObjMesa: action.data,
      };
      break;
    case "SELECCIONAR_CATEGORIA":
      return {
        ...stateActual,
        globalObjCategoria: action.data,
      };
    case "ACTUALIZAR_GLOBAL_PEDIDOS":
      return {
        ...stateActual,
        globalPedidos: action.data,
      };
    default:
      break;
  }
};

export default PosReducer;
