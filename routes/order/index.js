const orderController = require('../../controllers/orderController');

module.exports = (router) => {
  router.route('/order')
    .post(orderController.addOrder);
};
