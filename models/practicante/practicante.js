import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Practicante = sequelize.define(
  "practicantes",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dni: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      unique: true,
    },
    carrera: {
      type: DataTypes.STRING(100),
    },
    universidad: {
      type: DataTypes.STRING(150),
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
    schema: "public",
  }
);

export default Practicante;