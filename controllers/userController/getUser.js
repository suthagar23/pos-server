
require('../../database/index').dbConn; // eslint-disable-line
const User = require('../../models/userModel');
const config = require('../../config/serverConfig');
const { errorMessages } = require('../../config/responseMessagesConfig');

const dbFindLimit = config.DBOperations.findLimt;
/**
 * GET /users route to retrieve all users
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getUsers(req, res) {
  const result = {};
  let status = 200; // OK
  User.find({}, (err, users) => {
    if (!err) {
      result.status = status;
      result.result = users;
    } else {
      status = 500; // Internal Server Error
      result.status = status;
      result.error = err;
    }
    res.status(status).send(result);
  }).sort({ $natural: -1 }).limit(dbFindLimit);
}

/**
 * GET /user/:userId route to retrieve a user
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getUserByUserId(req, res) {
  const result = {};
  let status = 200; // OK
  const { userId } = req.params;
  if (userId) {
    User.findById(userId, (err, user) => {
      if (!err) {
        result.status = status;
        result.result = user;
      } else {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    }).sort({ $natural: -1 }).limit(dbFindLimit);
  } else {
    status = 400; // Bad Request
    result.status = status;
    result.error = errorMessages.REST.User.InvalidUserId;
    res.status(status).send(result);
  }
}

/**
 * GET /user/userName/:username route to retrieve a user
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getUserByUserName(req, res) {
  const result = {};
  let status = 200; // OK
  const { userName } = req.params;
  if (userName) {
    User.find({ userName }, (err, user) => {
      if (!err) {
        result.status = status;
        result.result = user;
      } else {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    }).sort({ $natural: -1 }).limit(dbFindLimit);
  } else {
    status = 400; // Bad Request
    result.status = status;
    result.error = errorMessages.REST.User.InvalidUserName;
    res.status(status).send(result);
  }
}

module.exports = {
  getUsers,
  getUserByUserId,
  getUserByUserName,
};
