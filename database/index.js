
const mongoose = require('mongoose');

// async function createDatabaseConnection() {
//   return mongoose.createConnection(process.env.MONGO_LOCAL_CONN_URL, { useNewUrlParser: true });
// }

module.exports = {
  dbConn: mongoose.createConnection(process.env.MONGO_LOCAL_CONN_URL, { useNewUrlParser: true }),
};
