import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const FlujoClientes = sequelize.define(
  "transactions",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    origin_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    origin_geom: {
      type: DataTypes.GEOGRAPHY("POINT", 4326),
      allowNull: true,
    },
    destination_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    destination_geom: {
      type: DataTypes.GEOGRAPHY("POINT", 4326),
      allowNull: true,
    },
    products: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    schema: "public", // Puedes cambiar el esquema si aplica
  }
);

export default FlujoClientes;