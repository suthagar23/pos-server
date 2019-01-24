const { validateToken } = require('../../middleware/jwtValidation');
const { checkUserScopes } = require('../../middleware/userScopeValidation');
const itemController = require('../../controllers/itemController');

module.exports = (router) => {
  router.route('/items')
    .get(validateToken, checkUserScopes, itemController.getItems);
  router.route('/item')
    .post(itemController.addItem);
  router.route('/item/:itemId')
    .get(itemController.getItemByItemId);
  router.route('/item/itemCode/:itemCode')
    .get(itemController.getItemByItemCode);
  router.route('/item/itemName/:itemName')
    .get(itemController.getItemByItemName);
};
