
const mongoose = require('mongoose');

const MONGO_LOCAL_CONN_URL = 'mongodb://localhost:27017/test';
// async function createDatabaseConnection() {
//   return mongoose.createConnection(process.env.MONGO_LOCAL_CONN_URL, { useNewUrlParser: true });
// }

// MongoDB Database Connection
// *** Need Refactor to use connection pooling ***
module.exports = {
  dbConn: mongoose.createConnection(MONGO_LOCAL_CONN_URL, { useNewUrlParser: true }),
};
