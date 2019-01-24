require('../../database/index').dbConn; // eslint-disable-line
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const { JWT_OPTIONS } = require('../../config/serverConfig').JWT_options;
const userScopes = require('../../config/userScopeConfig');
const { errorMessages } = require('../../config/responseMessagesConfig');

/**
 * Generate accessable user scopes for authenticated user
 */
function generateUserAccessScopes() {
  const logedInUserScopes = [userScopes.GET_USER,
    userScopes.GET_USERS,
    userScopes.ADD_USER];
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
  User.findOne({ userName }, (modelErr, user) => {
    if (!modelErr && user) {
      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          status = 200; // OK
          // Create a token
          const JWT_PAYLOAD = createJSONPayLoad(user);
          const token = jwt.sign(JWT_PAYLOAD, process.env.JWT_SECRET, JWT_OPTIONS);
          result.token = token;
          result.status = status;
          result.result = user;
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
      status = 404; // Not Found
      result.status = status;
      result.error = errorMessages.Authentication.InvalidUserNamePassword;
      res.status(status).send(result);
    }
  });
}

module.exports = {
  authenticateUser,
};
