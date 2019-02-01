
const mongoose = require('mongoose');

const MONGO_LOCAL_CONN_URL = 'mongodb://localhost:27017/test';

// MongoDB Database Connection
// *** Need Refactor to use connection pooling ***
mongoose.connect(MONGO_LOCAL_CONN_URL);

module.exports = mongoose.connection;
