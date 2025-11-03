import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";
import Contribuyente from "./contribuyente.js";

const UbicacionContribuyente = sequelize.define(
  "ubicacion_contribuyente",
  {
    // ID
    n_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Número de documento del contribuyente
    c_num_documento: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: Contribuyente,
        key: "c_num_documento",
      },
    },

    // Departamento
    c_departamento: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    // Provincia
    c_provincia: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    // Distrito
    c_distrito: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    // Código de vía
    c_codigo_via: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    // Tipo de vía
    c_tipo_via: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    // Nombre de la vía
    c_nombre_via: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    // Número municipal
    c_nro_municipal: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    // Manzana
    c_manzana: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    // Lote
    c_lote: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    // Sector
    c_sector: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    // Campos nuevos
    c_ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    c_zona_predio: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    c_cod_hu: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    c_nombre_habilitacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    c_nombre_edificacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    c_nro_interior: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    c_sub_lote: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    c_grupo_residencial: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    schema: "satgis",
    timestamps: false,
    freezeTableName: true,
  }
);

export default UbicacionContribuyente;
