const { DataTypes } = require('sequelize');
const sequelize = require('../db/db-config');

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'categories',
  timestamps: false
});

module.exports = Category;