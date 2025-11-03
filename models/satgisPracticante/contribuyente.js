import { DataTypes } from "sequelize";

import { sequelize } from "../../config/postgres/sequelize.js";

const Contribuyente = sequelize.define(
  "contribuyente",

  {
    // NÚMERO DE DOCUMENTO
    c_num_documento: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
    },

    // TIPO DE DOCUMENTO
    c_tipo_documento: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },

    // TIPO DE CONTRIBUYENTE
    c_tipo_contribuyente: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    // NOMBRE O RAZÓN SOCIAL
    c_nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    // CONDICIÓN ESPECIAL
    c_condicion_especial: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    // TELÉFONO DE CONTACTO
    c_telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    // CORREO ELECTRÓNICO
    c_correo_electronico: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },

  {
    schema: "satgis",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Contribuyente;
