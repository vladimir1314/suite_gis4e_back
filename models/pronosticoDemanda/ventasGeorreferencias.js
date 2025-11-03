import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/postgres/sequelize.js';

const ventasGeorref = sequelize.define(
    "ventas_georreferencias",
    {
        id_venta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //FOREIGN KEY A LA TABLA TIENDA
        id_tienda: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: "tienda",
                    schema: "pronostico_demanda",
                },
                key: "id_tienda",
            },
        },
        //FOREIGN KEY A LA TABLA PRODUCTO
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: "producto",
                    schema: "pronostico_demanda",
                },
                key: "id_producto",
            },
        },
        n_unidades_vendidas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        n_precio_unitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        d_fecha_venta: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        schema: "pronostico_demanda",
    }
);

export default ventasGeorref;