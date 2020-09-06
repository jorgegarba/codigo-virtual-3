import { Server } from "../config/server";
import { Mesa, Pedido, Categoria } from "../config/sequelize";

export const emitirReporte = async () => {
  const objServer = new Server();

  const mesas = await Mesa.count();
  const pedidos = await Pedido.count();
  const categorias = await Categoria.count();

  objServer.io.emit(
    "reporte-dashboard",
    JSON.stringify({ mesas, pedidos, categorias })
  );
};
