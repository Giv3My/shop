const { DataTypes } = require('sequelize');
const sequelize = require('../db/db-config');

const OrderDeviceModel = sequelize.define('orderDevice', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'order_device',
  timestamps: false
});

module.exports = OrderDeviceModel;