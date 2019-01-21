const addUser = require('./addUser');
const getAllUser = require('./getAllUser');
const loginUser = require('./loginUser');

module.exports = {
    addUser : addUser.add,
    getAllUser : getAllUser.getAll,
    loginUser : loginUser.login
}