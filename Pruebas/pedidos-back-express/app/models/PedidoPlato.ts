import { Sequelize, DataTypes } from "sequelize";

export const pedidoplato_model = (conexion: Sequelize) => {
  const modelo = conexion.define(
    "PedidoPlato",
    {
      pedidoplato_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      pedidoplato_cant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: "t_pedidoplato",
      timestamps: true,
    }
  );

  return modelo;
};
