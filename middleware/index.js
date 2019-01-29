// Main middleware to export all middlewares
const jwtValidation = require('./jwtValidation');
const userScopeValidation = require('./userScopeValidation');

// Combine all middlewares as one root middleware
const combinedMiddleWare = (function combinedMiddleWare() {
  return [jwtValidation.validateToken, userScopeValidation.checkUserScopes];
}());

module.exports = {
  authenticationMiddleWare: combinedMiddleWare,
};
