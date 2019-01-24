const itemController = require('../../controllers/itemController');
const { authenticationMiddleWare } = require('../../middleware/index');

module.exports = (router) => {
  router.route('/items')
    .get(authenticationMiddleWare, itemController.getItems);
  router.route('/item')
    .post(authenticationMiddleWare, itemController.addItem);
  router.route('/item/:itemId')
    .get(authenticationMiddleWare, itemController.getItemByItemId);
  router.route('/item/itemCode/:itemCode')
    .get(authenticationMiddleWare, itemController.getItemByItemCode);
  router.route('/item/itemName/:itemName')
    .get(authenticationMiddleWare, itemController.getItemByItemName);
};
