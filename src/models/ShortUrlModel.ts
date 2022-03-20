import { DataTypes } from 'sequelize';

import { db } from '../database/configuration';

export const ShortUrlModel = db.define('short_url', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  full: {
    type: DataTypes.STRING,
    allowNull: false
  },
  short: {
    type: DataTypes.STRING,
    allowNull: false
  },
});