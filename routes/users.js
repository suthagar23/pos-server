const jwtUtils = require('../utils/jwtUtils');
const userController = require('../controllers/userController');

module.exports = (router) => {
  router.route('/users')
    .get(jwtUtils.validateToken, userController.getAllUser); 
  router.route('/user')
    .post(jwtUtils.validateToken, userController.addUser)
  router.route('/login')
    .post(userController.loginUser)    
};