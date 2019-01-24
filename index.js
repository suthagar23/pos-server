require('dotenv').config(); // To setup .env variables

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose');
const routes = require('./routes/index.js');
const appOptions = require('./config');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development
const appPort = process.env.PORT;


// parse application/json and look for raw text
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/json'}));
app.use('/', bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

if (environment !== 'production') {
  app.use('/', logger('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));
const baseRestApiURL = appOptions.RestOptions.baseUrl;
app.use(baseRestApiURL, routes(router));


app.listen(appPort, () => {
  console.log(`Server now listening at localhost:${appPort}`);
});

// listen for the signal interruption (ctrl-c)
// process.on('SIGINT', () => {
//   console.log("exiting...")
//   dbClient.close();
//   process.exit();
// });


module.exports = app;
