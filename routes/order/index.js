const orderController = require('../../controllers/orderController');
// authenticationMiddleWare for validation JWT tokens and check for user access schopes
const { authenticationMiddleWare } = require('../../middleware/index');

module.exports = (router) => {
  router.route('/order')
    .post(authenticationMiddleWare, orderController.addOrder);
  router.route('/order/items')
    .post(authenticationMiddleWare, orderController.updateOrderItems);
  router.route('/orders')
    .get(authenticationMiddleWare, orderController.getOrders);
  router.route('/order/:orderId')
    .get(authenticationMiddleWare, orderController.getOrderById);
  router.route('/order/status/:orderStatus')
    .get(authenticationMiddleWare, orderController.getOrderByStatus);
  router.route('/order/items/:orderId')
    .get(authenticationMiddleWare, orderController.getItemsOfAOrder);
};
