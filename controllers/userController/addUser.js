const mongoose = require('mongoose');
const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
  add: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true }, (err) => {
      let result = {};
      let status = 201;  // Created
      if (!err) {
        const { userName, firstName, lastName, email, password} = req.body;
        const user = new User({ userName, firstName, lastName, email, password , 
            userStatus: 'false', 
            userRole: 'user'}); 
       
        user.save((err, user) => {
          if (!err) {
            result.status = status;
            result.result = user;
          } else {
            status = 500;  // Internal Server Error
            result.status = status;
            result.error = err;
          }
          res.status(status).send(result);
        });
      } else {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  }
}