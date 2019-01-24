require('dotenv').config(); // To setup .env variables

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index.js');
const appOptions = require('./config/serverConfig');
const { errorMessages } = require('./config/responseMessagesConfig');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development
const appPort = process.env.PORT;
const baseRestApiURL = appOptions.RestOptions.baseUrl;

app.use('/', bodyParser.text());
app.use('/', bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

if (environment !== 'production') {
  app.use('/', logger('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(baseRestApiURL, routes(router));

// / catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(errorMessages.NotFound);
  err.status = 404;
  next(err);
});
// production error handler to avoid stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
  const err1 = new Error(errorMessages.NotFound);
  err1.status = 500;
  next(err1);
});


app.listen(appPort, () => {
  console.log('Server now listening at localhost:', appPort);
});

process.on('SIGINT', () => {
  console.log('System Exiting...');
  process.exit();
});

module.exports = app;
