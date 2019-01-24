
const authController = require('../../controllers/authController');

module.exports = (router) => {
  router.route('/auth')
    .post(authController.authenticateUser);
};
