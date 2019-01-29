// Main Router to export all sub routings
const users = require('./user');
const swagger = require('./swagger');
const auth = require('./auth');
const item = require('./item');
const order = require('./order');

module.exports = (router) => {
  users(router);
  auth(router);
  item(router);
  order(router);
  swagger(router);
  return router;
};
