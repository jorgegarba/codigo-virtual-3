import { mesa_model } from "./../models/Mesa";
import { plato_model } from "./../models/Plato";
import { pedidoplato_model } from "./../models/PedidoPlato";
import { categoria_model } from "./../models/Categoria";
import { pedido_model } from "./../models/Pedido";
import { Sequelize } from "sequelize";
import { usuario_model } from "../models/Usuario";

export const conexion = new Sequelize("pedidos", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true,
  },
  timezone: "-05:00",
});

// export const conexion = new Sequelize(
//   "sql10363420",
//   "sql10363420",
//   "4HusIUV5M4",
//   {
//     host: "sql10.freemysqlhosting.net",
//     dialect: "mysql",
//     dialectOptions: {
//       useUTC: false,
//       dateStrings: true,
//       typeCast: true,
//     },
//     timezone: "-05:00",
//   }
// );

export const Usuario = usuario_model(conexion);
export const Pedido = pedido_model(conexion);
export const Categoria = categoria_model(conexion);
export const PedidoPlato = pedidoplato_model(conexion);
export const Plato = plato_model(conexion);
export const Mesa = mesa_model(conexion);

// relaciones

Categoria.hasMany(Plato, { foreignKey: "categoria_id" });
Plato.belongsTo(Categoria, { foreignKey: "categoria_id" });

Plato.hasMany(PedidoPlato, { foreignKey: "plato_id" });
PedidoPlato.belongsTo(Plato, { foreignKey: "plato_id" });

PedidoPlato.belongsTo(Pedido, { foreignKey: "pedido_id" });
Pedido.hasMany(PedidoPlato, { foreignKey: "pedido_id" });

Pedido.belongsTo(Usuario, { foreignKey: "usu_id" });
Usuario.hasMany(Pedido, { foreignKey: "usu_id" });

Pedido.belongsTo(Mesa, { foreignKey: "mesa_id" });
Mesa.hasMany(Pedido, { foreignKey: "mesa_id" });
