
require('../../database/index').dbConn; // eslint-disable-line
const User = require('../../models/userModel');

/**
 * POST /user route to create a new user
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function addUser(req, res) {
  const result = {};
  let status = 201; // Created
  const {
    userName, firstName, lastName, email, password,
  } = req.body;
  const user = new User({
    userName,
    firstName,
    lastName,
    email,
    password,
    userStatus: 'false',
    userRole: 'user',
  });

  user.save((err, userObject) => {
    if (!err) {
      result.status = status;
      result.result = userObject;
    } else {
      status = 500; // Internal Server Error
      result.status = status;
      result.error = err;
    }
    res.status(status).send(result);
  });
}

module.exports = {
  addUser,
};
