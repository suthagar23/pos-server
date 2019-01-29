// Common server configurations, REST API, and JWT configurations
module.exports = Object.freeze({
  systemName: 'Apple POS',
  RestOptions: {
    baseUrl: '/api/v1',
  },
  DBOperations: {
    findLimit: 100,
    searchLimit: 10,
  },
  JWT_options: {
    expiresIn: process.env.JWT_EXPIRES_IN,
    issuer: process.env.JWT_ISSUER,
  },
  PasswordHash: {
    saltingRounds: 2,
  },
});
