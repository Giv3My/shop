const { DataTypes } = require('sequelize');
const sequelize = require('../db/db-config');

const Good = sequelize.define('good', {
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
  desc: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'goods',
  timestamps: false
});

module.exports = Good;