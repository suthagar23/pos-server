const mongoose = require('mongoose');
const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_options = require('../../config')['JWT_options'];

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
  login: (req, res) => {
    const { name, password } = req.body;

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200; // OK
      if(!err) {
        User.findOne({name}, (err, user) => {
          if (!err && user) {
           
            bcrypt.compare(password, user.password).then(match => {
              if (match) {
                status = 200; // OK
                // Create a token
                const JWT_Payload = { userName: user.userName, userRole: user.userRole };
                const token = jwt.sign(JWT_Payload, process.env.JWT_SECRET, JWT_options);

                result.token = token;
                result.status = status;
                result.result = user;
              } else {
                status = 401; // Unauthorized
                result.status = status;
                result.error = `Authentication error`;
              }
              res.status(status).send(result);
            }).catch(err => {
              status = 500; // Internal Server Erro
              result.status = status;
              result.error = err;
              res.status(status).send(result);
            });
          } else {
            status = 404; // Not Found
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          }
        });
      } else {
        status = 500; // Internal Server Erro
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  }
}