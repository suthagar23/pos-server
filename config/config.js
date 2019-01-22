module.exports = {
    development: {
      port: process.env.PORT || 3000,
      saltingRounds: 2
    },
    JWT_options : {
      expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: process.env.JWT_ISSUER
    },
    SwaggerOptions : {
      swaggerDefinition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
          title: 'Sysco POS API Docs', 
          version: '0.1.0', 
          description: 'Documenting RESTful API with Swagger',
        },
        host: 'localhost:3000',
        basePath: '/',
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT'
            }
          }
        },
      },
      apis: ['./routes/*.js']
    }
  }