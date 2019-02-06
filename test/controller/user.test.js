/* eslint-disable */
const getController = require('../../controllers/userController/getUser');
const addController = require('../../controllers/userController/addUser')
const http_mocks = require('node-mocks-http')
const should = require('should');

function buildResponse() {
  return http_mocks.createResponse({ eventEmitter: require('events').EventEmitter });
}

describe('User Controller Tests', () => {
  it('getUsers', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/user',
    });

    response.on('end', () => {
      response._getData().status.should.equal(200);
      done();
    });

    getController.getUsers(request, response);
  });

  it('getUserByUserId', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/user',
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getUserByUserId(request, response);
  });

  it('getUserByUserName', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getUserByUserName(request, response);
  });

    it('addUser', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'POST', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(500);
      done();
    });

    addController.addUser(request, response);
  });
});
