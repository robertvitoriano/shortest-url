import { DataTypes } from 'sequelize';

import { db } from '../../../database/configuration';

export const ShortUrlModel = db.define('short_url', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  originalUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  urlCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
});