const Good = require('../models/GoodModel');
const Category = require('../models/CategoryModel');

class GoodController {
  async create(req, res) {
    try {
      const { title, desc, price, img, categoryId } = req.body;
      const good = await Good.create({ title, desc, price, img, categoryId });

      return res.json(good);
    } catch (e) {
      console.log(e);
    }
  };

  async getAll(req, res) {
    const { categoryId } = req.query;

    if (categoryId) {
      const goods = await Good.findAll({
        where: { categoryId },
        include: [{
          model: Category,
          as: 'category',
          required: true,
        }]
      });

      return res.json(goods);
    }

    const goods = await Good.findAll({
      include: [{
        model: Category,
        as: 'category',
        required: true
      }],
      order: [
        ['id', 'ASC']
      ]
    });

    return res.json(goods);
  };
};

module.exports = new GoodController();