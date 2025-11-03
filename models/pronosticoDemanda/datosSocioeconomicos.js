import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/postgres/sequelize.js';

const datosSocioEconomicos = sequelize.define(
    "datos_socioeconomicos", {
        id_datos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //FOREIGN KEY A LA TABLA SUBZONA
        id_subzona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: "sub_zona",
                    schema: "pronostico_demanda",
                },
                key: "id_subzona",
            },
        },
        n_promedio_ingresos: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        n_promedio_edad: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        n_densidad_poblacional: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        n_anio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        schema: "pronostico_demanda",
    }
);

export default datosSocioEconomicos;