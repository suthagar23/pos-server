const { systemName } = require('./serverConfig');

module.exports = Object.freeze({
  SwaggerOptions: {
    swaggerDefinition: {
      openapi: '3.0.2',
      info: {
        title: systemName.concat(' API Docs'),
        version: '0.1.0',
        description: 'RESTful API Documentation with Swagger',
      },
      host: 'localhost:3000',
      basePath: '/',
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['./routes/*.js', './routes/*/*.js'],
  },
});
