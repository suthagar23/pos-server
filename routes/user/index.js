const userController = require('../../controllers/userController');
const { authenticationMiddleWare } = require('../../middleware/index');

module.exports = (router) => {
  router.route('/users')
    .get(authenticationMiddleWare, userController.getUsers);
  router.route('/user')
    .post(authenticationMiddleWare, userController.addUser);
  router.route('/user/:userId')
    .get(authenticationMiddleWare, userController.getUser);
  router.route('/user/userName/:userName')
    .get(authenticationMiddleWare, userController.getUserByName);
};
