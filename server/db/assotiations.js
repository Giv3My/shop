const Category = require('../models/CategoryModel');
const Good = require('../models/GoodModel');
const OrderModel = require('../models/OrderModel');
const OrderDeviceModel = require('../models/OrderDeviceModel');

Category.hasMany(Good, { as: 'goods' });
Good.belongsTo(Category, { as: 'category' });

OrderModel.hasMany(OrderDeviceModel, { as: 'orderItems' });
OrderDeviceModel.belongsTo(OrderModel, { as: 'order' });