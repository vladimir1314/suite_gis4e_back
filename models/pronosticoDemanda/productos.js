import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/postgres/sequelize.js';

const productos = sequelize.define(
    "producto",
    {
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        c_nombre_producto: {
            type: DataTypes.STRING(75),
            allowNull: false,
        },
    },
    {
        timestamps: false,
        schema: "pronostico_demanda",
    }
);

export default productos;