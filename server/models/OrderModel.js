const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../db/db-config');

const OrderModel = sequelize.define('order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  userEmail: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'orders',
  timestamps: false
});

module.exports = OrderModel;