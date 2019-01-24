
const swaggerJSDoc = require('swagger-jsdoc');
const { SwaggerOptions } = require('../../config/swaggerOptionsConfig');

const swaggerSpec = swaggerJSDoc(SwaggerOptions);

module.exports = (router) => {
  router.route('/swagger.json')
    .get((req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });
};
