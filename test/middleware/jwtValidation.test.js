/* eslint-disable */
const { validateToken } = require('../../middleware/jwtValidation');
const http_mocks = require('node-mocks-http')
const should = require('should');
var expect = require('chai').expect;
process.env.JWT_SECRET = 'suthaSecret';
function buildResponse() {
  return http_mocks.createResponse({ eventEmitter: require('events').EventEmitter });
}

describe('Middleware Tests', () => {
  it('validateToken without header', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/auth',
    });

    response.on('end', () => {
      response._getData().status.should.equal(401);
      done();
    });

    function callBack(obj) { }
    validateToken(request, response, callBack);
  });

});
