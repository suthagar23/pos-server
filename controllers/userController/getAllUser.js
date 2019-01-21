const mongoose = require('mongoose');
const User = require('../../models/userModel');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
  getAll: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;  // OK
      if (!err) {
        const payload = req.JWT_Decoded;
        if (payload && payload.userRole === 'user') {
          User.find({}, (err, users) => {
            if (!err) {
              result.status = status;
              result.error = err;
              result.result = users;
            } else {
              status = 500;  // Internal Server Error
              result.status = status;
              result.error = err;
            }
            res.status(status).send(result);
          });
        } else {
          status = 401; //  Unauthorized
          result.status = status;
          result.error = `Authentication error`;
          res.status(status).send(result);
        }
      } else {
        status = 500;  // Internal Server Error
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  }
}