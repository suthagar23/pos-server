/* eslint-disable */
const authController = require('../../controllers/authController/authenticate');
const http_mocks = require('node-mocks-http')
const should = require('should');

function buildResponse() {
  return http_mocks.createResponse({ eventEmitter: require('events').EventEmitter });
}

describe('Auth Controller Tests', () => {
  it('authenticateUser', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/user',
    });

    response.on('end', () => {
      response._getData().status.should.equal(401);
      done();
    });

    authController.authenticateUser(request, response);
  });
  
});
