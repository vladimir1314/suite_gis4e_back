import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/postgres/sequelize.js';

const zonas = sequelize.define(
    "zona", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        c_nombre_zona: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        geom: {
            type: DataTypes.GEOMETRY('POLYGON', 4326),
            allowNull: true,
        }
    },
    {
        timestamps: false,
        schema: "pronostico_demanda",
    }
);

export default zonas;