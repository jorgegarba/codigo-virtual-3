import React, { useReducer, useContext } from "react";
import PosReducer from "./posReducer";
import PosContext from "./posContext";
import { posPedido } from "../../services/pedidos";
import moment from "moment";
import AuthContext from "./../../context/auth/authContext";

const PosState = (props) => {
  const [state, dispatch] = useReducer(PosReducer, {
    globalObjMesa: null,
    globalObjCategoria: null,
    globalPedidos: [],
  });

  const localAuthContext = useContext(AuthContext);
  const { usu_id } = localAuthContext;

  /**
   * A continuación, la lista de funciones que intentarán modificar el estado
   */

  const seleccionarMesa = (objMesa) => {
    dispatch({
      type: "SELECCIONAR_MESA",
      data: { ...objMesa },
    });
  };

  const seleccionarCategoria = (objCategoria) => {
    dispatch({
      type: "SELECCIONAR_CATEGORIA",
      data: { ...objCategoria },
    });
  };

  const incrementarPlato = (plato_id) => {
    const { globalObjMesa, globalPedidos } = state;
    // preguntamos si no tenemos una mesa global seleccionada
    if (!globalObjMesa) return;
    // buscar el pedido de la mesa seleccionada, es posible que la mesa
    // seleccionada no tenga pedidos aún, como es posible que tenga pedidos
    const pedidoActual = globalPedidos.find(
      (objPedido) => objPedido.mesa_id === globalObjMesa.mesa_id
    );
    // si la mesa actual seleccionada tiene un pedido activo
    if (pedidoActual) {
      let pedidoPlato = pedidoActual.pedidoplatos.find(
        (objPedidoPlato) => objPedidoPlato.plato_id === plato_id
      );
      //la mesa sí tenía un pedido.
      // pero.... ¿Tenía el pedido un plato con el plato_id que queremos incrementar?
      if (pedidoPlato) {
        // sí tenía un plato
        const globalPedidosNuevo = [
          ...globalPedidos.map((objPedido) => {
            if (objPedido.mesa_id === globalObjMesa.mesa_id) {
              objPedido.pedidoplatos.forEach((objPlato) => {
                if (objPlato.plato_id === plato_id) {
                  objPlato.pedidoplato_cant = objPlato.pedidoplato_cant + 1;
                }
              });
              return objPedido;
            }
            // DE TODAS FORMAS, MAP tiene que retornar un objeto
            return objPedido;
          }),
        ];
        dispatch({
          type: "ACTUALIZAR_GLOBAL_PEDIDOS",
          data: globalPedidosNuevo,
        });
      } else {
        // La mesa, sí tenía un pedido pero no tenía el plato el cual estamos incrementando
        // ES DECIR habían otros platos en la orden.
        const globalPedidosNuevo = [
          ...globalPedidos.map((objPedido) => {
            if (objPedido.mesa_id === globalObjMesa.mesa_id) {
              objPedido.pedidoplatos.push({
                plato_id: plato_id,
                pedidoplato_cant: 1,
              });
              return objPedido;
            }
            return objPedido;
          }),
        ];
        dispatch({
          type: "ACTUALIZAR_GLOBAL_PEDIDOS",
          data: globalPedidosNuevo,
        });
      }
    } else {
      // si la mesa actual seleccionada no tuviera ningun pedido
      const globalPedidosNuevo = [
        ...globalPedidos,
        {
          mesa_id: globalObjMesa.mesa_id,
          pedido_nro: "1000",
          pedido_est: "pendiente",
          pedidoplatos: [
            {
              plato_id: plato_id,
              pedidoplato_cant: 1,
            },
          ],
        },
      ];
      dispatch({
        type: "ACTUALIZAR_GLOBAL_PEDIDOS",
        data: globalPedidosNuevo,
      });
    }
  };

  const globalPagar = () => {
    const { globalPedidos, globalObjMesa } = state;
    let pedidoActual = globalPedidos.find(
      (objPedido) => objPedido.mesa_id === globalObjMesa.mesa_id
    );
    const fechaActual = moment().format("YYYY-MM-DD hh:mm:ss");
    pedidoActual.pedido_fech = fechaActual;
    pedidoActual.usu_id = usu_id;
    console.log(pedidoActual);
    return;
    posPedido(pedidoActual).then((rpta) => {
      if (rpta.ok) {
        // limpiar la mesa del arreglo de pedidos globales
        const globalPedidosNuevo = [
          ...globalPedidos.filter(
            (objPedido) => objPedido.mesa_id !== globalObjMesa.mesa_id
          ),
        ];
        dispatch({
          type: "ACTUALIZAR_GLOBAL_PEDIDOS",
          data: globalPedidosNuevo,
        });
      }
    });
  };

  return (
    <PosContext.Provider
      value={{
        globalObjMesa: state.globalObjMesa,
        globalObjCategoria: state.globalObjCategoria,
        globalPedidos: state.globalPedidos,
        seleccionarCategoria: seleccionarCategoria,
        seleccionarMesa: seleccionarMesa,
        incrementarPlato: incrementarPlato,
        globalPagar: globalPagar,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};
export default PosState;
