import { DataTypes } from 'sequelize';
import { adminSequelize } from '../../config/postgres/adminSequelize.js';

export const PuntosVenta = adminSequelize.define('puntos_venta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codclie: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  giro: {
    type: DataTypes.STRING(100)
  },
  ventaenero: {
    type: DataTypes.DECIMAL(12, 2)
  },
  ventafebrero: {
    type: DataTypes.DECIMAL(12, 2)
  },
  ventamarzo: {
    type: DataTypes.DECIMAL(12, 2)
  },
  ventatotalsoles: {
    type: DataTypes.DECIMAL(12, 2)
  },
  peso: {
    type: DataTypes.DECIMAL(12, 2)
  },
  geom: {
    type: DataTypes.GEOMETRY('POINT', 4326)
  }
}, {
  schema: 'concentracion_clientes',
  tableName: 'puntos_venta',
  timestamps: false,
  freezeTableName: true
});