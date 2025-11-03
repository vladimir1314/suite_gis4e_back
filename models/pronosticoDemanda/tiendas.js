import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/postgres/sequelize.js';

const tiendas = sequelize.define(
    "tienda",
    {
        id_tienda: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        c_nombre_tienda: {
            type: DataTypes.STRING(75),
            allowNull: false,
        },
        geom: {
            type: DataTypes.GEOMETRY('POINT', 4326),
            allowNull: true,
        }
    },
    {
        timestamps: false,
        schema: "pronostico_demanda",
    }
);

export default tiendas;