const users = require('./users');
const swagger = require('./swagger');

module.exports = (router) => {
  users(router);
  swagger(router);
  return router;
};