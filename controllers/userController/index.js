const addUser = require('./addUser');
const getUser = require('./getUser');

module.exports = {
  addUser: addUser.addUser,
  getUser: getUser.getUserByUserId,
  getUserByName: getUser.getUserByUserName,
  getUsers: getUser.getUsers,
};
