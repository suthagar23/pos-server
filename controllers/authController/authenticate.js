require('../../database/index').dbConn; // eslint-disable-line
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const { JWT_OPTIONS } = require('../../config/serverConfig');
const userScopes = require('../../config/userScopeConfig');
const { errorMessages } = require('../../config/responseMessagesConfig');

/**
 * Generate accessable user scopes for authenticated user
 */
function generateUserAccessScopes() {
  const logedInUserScopes = Object.keys(userScopes);
  return logedInUserScopes;
}

/**
 * Create JSON Payload to create JWT Token
 * @param {object} user - user object.
 */
function createJSONPayLoad(user) {
  const JWT_PAYLOAD = { userName: user.userName, userScopes: generateUserAccessScopes() };
  return JWT_PAYLOAD;
}

/**
 * POST /auth route to authenticate user credentials
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function authenticateUser(req, res) {
  const result = {};
  let status = 200; // OK
  const { userName, password } = req.body;
  // Find the user from UserModel using given userName
  User.findOne({ userName }, (modelErr, userModel) => {
    if (!modelErr && userModel) {
      // Destructing password and userInformation from UserModel response
      const { password: userPassword, ...userObject } = userModel.getFieldsForAuth();
      // Compare given password with hased userPassword from UserModel
      bcrypt.compare(password, userPassword).then((match) => {
        if (match) {
          status = 200; // OK
          // Create a JWT token and assign to response result
          const JWT_PAYLOAD = createJSONPayLoad(userObject);
          const token = jwt.sign(JWT_PAYLOAD, process.env.JWT_SECRET, JWT_OPTIONS);
          result.token = token;
          result.status = status;
          result.result = userObject;
        } else {
          status = 401; // Unauthorized
          result.status = status;
          result.error = errorMessages.Authentication.InvalidUserNamePassword;
        }
        res.status(status).send(result);
      }).catch((serverErr) => {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = serverErr;
        res.status(status).send(result);
      });
    } else {
      status = 401; // Unauthorized
      result.status = status;
      result.error = errorMessages.Authentication.InvalidUserNamePassword;
      res.status(status).send(result);
    }
  }).select('+password');
}

module.exports = {
  authenticateUser,
};
