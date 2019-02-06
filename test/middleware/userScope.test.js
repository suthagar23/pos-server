/* eslint-disable */
const controller = require('../../middleware/userScopeValidation');
const http_mocks = require('node-mocks-http')
const should = require('should');

function buildResponse() {
  return http_mocks.createResponse({ eventEmitter: require('events').EventEmitter });
}

describe('Middleware Tests', () => {
  it('checkUserScopes', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/user',
    });

    response.on('end', () => {
      response._getData().status.should.equal(403);
      done();
    });

    controller.checkUserScopes(request, response, {});
  });

});
