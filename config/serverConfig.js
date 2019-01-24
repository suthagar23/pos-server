module.exports = {
  systemName: 'Apple POS',
  RestOptions: {
    baseUrl: '/api/v1',
  },
  DBOperations: {
    findLimt: 100,
  },
  JWT_options: {
    expiresIn: process.env.JWT_EXPIRES_IN,
    issuer: process.env.JWT_ISSUER,
  },
};
