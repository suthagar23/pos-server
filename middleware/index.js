const jwtValidation = require('./jwtValidation');
const userScopeValidation = require('./userScopeValidation');

const combinedMiddleWare = (function combinedMiddleWare() {
  return [jwtValidation.validateToken, userScopeValidation.checkUserScopes];
}());

module.exports = {
  authenticationMiddleWare: combinedMiddleWare,
};
