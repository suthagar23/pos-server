
const swaggerJSDoc = require('swagger-jsdoc');
const config = require('../config/config');
const swaggerSpec = swaggerJSDoc(config.SwaggerOptions);

module.exports = (router) => {
  router.route('/swagger.json')
    .get((req,res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });   
};