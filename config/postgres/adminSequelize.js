// config/postgres/adminSequelize.js
import { Sequelize } from 'sequelize';

export const adminSequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  logging: false,
});
