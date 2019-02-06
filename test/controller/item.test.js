/* eslint-disable */
const getController = require('../../controllers/itemController/getItem');
const addController = require('../../controllers/itemController/addItem')
const http_mocks = require('node-mocks-http')
const should = require('should');

function buildResponse() {
  return http_mocks.createResponse({ eventEmitter: require('events').EventEmitter });
}

describe('Item Controller Tests', () => {
  it('getItems', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/items',
    });

    response.on('end', () => {
      response._getData().status.should.equal(200);
      done();
    });

    getController.getItems(request, response);
  });

  it('getItemByItemId', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/items',
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getItemByItemId(request, response);
  });

  it('getItemByItemId', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getItemByItemId(request, response);
  });

  it('getItemByItemCode', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getItemByItemCode(request, response);
  });

  it('getItemByItemName', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getItemByItemName(request, response);
  });

  it('searchItem', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.searchItem(request, response);
  });

    it('addItem', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'POST', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(500);
      done();
    });

    addController.addItem(request, response);
  });
});
