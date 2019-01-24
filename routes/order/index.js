const orderController = require('../../controllers/orderController');
const { authenticationMiddleWare } = require('../../middleware/index');

module.exports = (router) => {
  router.route('/order')
    .post(authenticationMiddleWare, orderController.addOrder);
};
