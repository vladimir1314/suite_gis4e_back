import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/postgres/sequelize.js';

const Competencia = sequelize.define(
    "tiendas_competencia", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        c_codcomp: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        f_x: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        f_y: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        schema: "proximidad_competencia",
    }
);

export default Competencia;