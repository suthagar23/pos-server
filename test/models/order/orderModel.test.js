/* eslint-disable */
let expect = require('chai').expect; 
require('should'); 
process.env.MONGO_URL = 'mongodb://localhost:27017/test1';
const Order = require('../../../models/order/orderModel');

describe('IemModel', () => {
  it('Should throw error if orderStatus is empty', (done) => {
    const order = new Order();
    order.validate((err) => {
      expect(err.errors.orderStatus).to.exist;
      done();
    });
  });

  it('Should throw error if orderStatus is differ from enum', (done) => {
    const order = new Order();
    order.orderStatus = "NotAllowed";
    order.validate((err) => {
      expect(err.errors.orderStatus).to.exist;
      done();
    });
  });

  it('Should not throw error if orderStatus is defined in enum', (done) => {
    const order = new Order();
    order.orderStatus = "NEW_ORDER";
    order.validate((err) => {
      expect(err).to.not.exist;
      done();
    });
  });

  
});
