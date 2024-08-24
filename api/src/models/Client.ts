import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Account from './Account';

class Client extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public clientType!: 'individual' | 'business';
}

Client.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientType: {
    type: DataTypes.ENUM('individual', 'business'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Client',
});

Client.hasMany(Account);

export default Client;
