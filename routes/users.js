const jwtUtils = require('../utils/jwtUtils');
const userController = require('../controllers/userController');

module.exports = (router) => {
  router.route('/users')
    .post(userController.addUser)
    .get(jwtUtils.validateToken, userController.getAllUser); 
  router.route('/login')
    .post(userController.loginUser)    
};