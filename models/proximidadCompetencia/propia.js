import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Propia = sequelize.define(
    "tiendas_propias", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        c_codclie: {
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

export default Propia;