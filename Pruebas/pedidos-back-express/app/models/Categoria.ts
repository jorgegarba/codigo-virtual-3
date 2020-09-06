import { Sequelize, DataTypes } from "sequelize";

export const categoria_model = (conexion: Sequelize) => {
  const modelo = conexion.define(
    "Categoria",
    {
      categoria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      categoria_nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "t_categoria",
      timestamps: true,
    }
  );

  return modelo;
};
