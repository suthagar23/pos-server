const jwt = require('jsonwebtoken');
const { JWT_OPTIONS } = require('../config/serverConfig').JWT_options;
const { errorMessages } = require('../config/responseMessagesConfig');

module.exports = {
  /**
 * ValidateToken to validate JWT tokens
 * @param {req} user - Request Object.
 * @param {res} user - Respone Object.
 * @param {next} user - Next fowared function.
 */
  validateToken: (req, res, next) => {
    // Get authorization headers from request
    const authorizationHeader = req.headers.authorization;
    let result;
    if (authorizationHeader) {
      // Seperate token from {Bearer <token>} format
      const token = req.headers.authorization.split(' ')[1];
      try {
        // Verify makes sure that the token hasn't expired
        result = jwt.verify(token, process.env.JWT_SECRET, JWT_OPTIONS);
        // Add decoded JWT token information to request
        req.JWT_Decoded = result;
        next();
      } catch (err) {
        throw new Error(errorMessages.Authentication.Error);
      }
    } else {
      result = {
        error: errorMessages.Authentication.TokenRequired,
        status: 401,
      };
      res.status(401).send(result);
    }
  },
};
