require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/index.js');
const appOptions = require('./config/serverConfig');
const { errorMessages } = require('./config/responseMessagesConfig');

const app = express();
// CORS whitelist to allow host names
// const whitelist = ['http://localhost:8080'];
// const corsOptions = {
//   origin(origin, respone) {
//     if (whitelist.indexOf(origin) !== -1) {
//       respone(null, true);
//     } else {
//       respone(new Error('Not allowed by CORS'));
//     }
//   },
// };
// app.use(cors(corsOptions)); // eslint-disable-line
app.use(cors());

const router = express.Router();
const environment = process.env.NODE_ENV;
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
  next();
});


app.listen(appPort, () => {
  console.log('Server now listening at localhost:', appPort);
});

process.on('SIGINT', () => {
  console.log('System Exiting...');
  process.exit();
});

module.exports = app;
