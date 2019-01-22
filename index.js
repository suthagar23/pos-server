require('dotenv').config(); // To setup .env variables

const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('./config/config');
const routes = require('./routes/index.js');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development
const appPort = config[environment].port;

app.use('/', bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (environment !== 'production') {
  app.use('/', logger('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', routes(router));

app.listen(`${appPort}`, () => {
  console.log(`Server now listening at localhost:${appPort}`);
});

module.exports = app;