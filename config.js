module.exports = {
    development: {
      port: process.env.PORT || 3000,
      saltingRounds: 2
    },
    JWT_options : {
      expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: process.env.JWT_ISSUER
    }
  }