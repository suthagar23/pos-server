const orderController = require('../../controllers/orderController');
// authenticationMiddleWare for validation JWT tokens and check for user access schopes
const { authenticationMiddleWare } = require('../../middleware/index');

module.exports = (router) => {
  router.route('/order')
    .post(authenticationMiddleWare, orderController.addOrder);
};
