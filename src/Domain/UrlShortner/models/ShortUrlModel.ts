import { DataTypes, Model } from 'sequelize';

import sequelizeConnection from './../../../database/configuration';
import { ShortUrlModelAttributes, ShortUrlModelInput } from './IShortUrlModel';


class ShortUrlModel extends Model<ShortUrlModelAttributes, ShortUrlModelInput> implements ShortUrlModelAttributes {

  public id!: number;
  public originalUrl!: string;
  public urlCode!: string;
  public shortUrl!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

ShortUrlModel.init({
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

},
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })

  export { ShortUrlModel}
