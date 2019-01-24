const jwt = require('jsonwebtoken');
const { JWT_OPTIONS } = require('../config').JWT_options;

module.exports = {
  validateToken: (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    let result;
    if (authorizationHeader) {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      try {
        // verify makes sure that the token hasn't expired
        result = jwt.verify(token, process.env.JWT_SECRET, JWT_OPTIONS);
        req.JWT_Decoded = result;
        next();
      } catch (err) {
        throw new Error(err);
      }
    } else {
      result = {
        error: 'Authentication error. Token required.',
        status: 401,
      };
      res.status(401).send(result);
    }
  },
};
