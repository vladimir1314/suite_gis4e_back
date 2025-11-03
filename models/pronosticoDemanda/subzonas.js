import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/postgres/sequelize.js';

const subZonas = sequelize.define(
    "sub_zona", {
        id_subzona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //FOREIGN KEY A LA TABLA ZONA
        id_zona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: "zona",
                    schema: "pronostico_demanda",
                },
                key: "id",
            },
        },
        c_nombre_subzona: {
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

export default subZonas;