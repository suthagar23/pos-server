
require('../../database/index').dbConn; // eslint-disable-line
const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const { PasswordHash } = require('../../config/serverConfig');
/**
 * POST /user route to create a new user
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function addUser(req, res) {
  const result = {};
  let status = 201; // Created
  // Destructing requied fields from requests to save the user
  const {
    userName, firstName, lastName, email, password,
  } = req.body;
  // Hash userpassword to store in the database
  bcrypt.hash(password, PasswordHash.saltingRounds, (err, hash) => {
    if (err) {
      status = 500; // Internal Server Error
      result.status = status;
      result.error = err;
      res.status(status).send(result);
    } else {
      const user = new User({
        userName,
        firstName,
        lastName,
        email,
        password: hash,
        userStatus: 'false',
        userRole: 'user',
      });

      user.save((errModel, userObject) => {
        if (!errModel) {
          result.status = status;
          // Remove password field from the response
          result.result = userObject.toRegJSON();
        } else {
          status = 500; // Internal Server Error
          result.status = status;
          result.error = errModel;
        }
        res.status(status).send(result);
      });
    }
  });
}

module.exports = {
  addUser,
};
