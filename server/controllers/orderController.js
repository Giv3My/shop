const OrderModel = require('../models/OrderModel');
const OrderDeviceModel = require('../models/OrderDeviceModel');
const mailService = require('../services/mailService');

class OrderController {
  async checkout(req, res) {
    try {
      const { email, cart } = req.body;

      const order = await OrderModel.create({ userEmail: email });

      cart.forEach(async (cartItem) => {
        await OrderDeviceModel.create({
          title: cartItem.title,
          price: cartItem.price,
          quantity: cartItem.quantity,
          img: cartItem.img,
          orderId: order.id
        });
      });

      res.json(order);

      return await mailService.sendOrderNumberMail(email, order.id);
    } catch (e) {
      console.log(e);
    }
  };

  async getOrder(req, res) {
    try {
      const { orderId } = req.params;

      const order = await OrderModel.findOne({
        where: {
          id: orderId
        },
        include: [{
          model: OrderDeviceModel,
          as: 'orderItems',
          required: true
        }]
      });

      if (!order) {
        res.status(400).send('Order with this track number wasn\'t found');
      }

      return res.json(order);
    } catch (e) {
      console.log(e);
    }
  };
};

module.exports = new OrderController();