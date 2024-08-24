import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Account from './Account';

class Transaction extends Model {
  public id!: number;
  public type!: 'deposit' | 'withdrawal';
  public date!: Date;
  public amount!: number;
  public location?: string;
}

Transaction.init({
  type: {
    type: DataTypes.ENUM('deposit', 'withdrawal'),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Transaction',
});

export default Transaction;
