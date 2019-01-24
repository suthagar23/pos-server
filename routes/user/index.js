const { validateToken } = require('../../middleware/jwtValidation');
const { checkUserScopes } = require('../../middleware/userScopeValidation');
const userController = require('../../controllers/userController');

module.exports = (router) => {
  router.route('/users')
    .get(userController.getUsers);
  router.route('/user')
    .post(validateToken, checkUserScopes, userController.addUser);
  router.route('/user/:userId')
    .get(userController.getUser);
  router.route('/user/userName/:userName')
    .get(userController.getUserByName);
};
