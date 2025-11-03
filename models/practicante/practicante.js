import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Practica = sequelize.define(
  "tbl_practica",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    c_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    n_edad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    b_activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    d_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    schema: "control_urbano",
  }
);

export default Practica;