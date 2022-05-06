const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const goodController = require('../controllers/goodController');
const orderController = require('../controllers/orderController');

router.post('/categories', categoryController.create);
router.post('/goods', goodController.create);
router.get('/categories', categoryController.getAll);
router.get('/goods', goodController.getAll);

router.post('/orders', orderController.checkout);
router.get('/orders/:orderId', orderController.getOrder);

module.exports = router;