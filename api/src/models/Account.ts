import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Transaction from './Transaction';

class Account extends Model {
  public id!: number;
  public accountNumber!: string;
  public balance!: number;
  public accountType!: 'savings' | 'checking';
}

Account.init({
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  balance: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  accountType: {
    type: DataTypes.ENUM('savings', 'checking'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Account',
});

Account.hasMany(Transaction);

export default Account;
