/* eslint-disable */
const getController = require('../../controllers/orderController/getOrder');
const addController = require('../../controllers/orderController/addOrder')
const http_mocks = require('node-mocks-http')
const should = require('should');

function buildResponse() {
  return http_mocks.createResponse({ eventEmitter: require('events').EventEmitter });
}

describe('Order Controller Tests', () => {
  it('getOrders', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/order',
    });

    response.on('end', () => {
      response._getData().status.should.equal(200);
      done();
    });

    getController.getOrders(request, response);
  });

  it('getOrderByOrderId', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
      url: '/api/v1/order',
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getOrderByOrderId(request, response);
  });

  it('getOrderByStatus', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getOrderByStatus(request, response);
  });

  it('getItemsOfAOrder', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(400);
      done();
    });

    getController.getItemsOfAOrder(request, response);
  });


  it('addOrder', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'POST', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(201);
      done();
    });

    addController.addOrder(request, response);
  });

  it('updateOrderItems', (done) => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'POST', 
    });

    response.on('end', () => {
      response._getData().status.should.equal(404);
      done();
    });

    addController.updateOrderItems(request, response);
  });
});
