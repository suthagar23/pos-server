/* eslint-disable */
let expect = require('chai').expect; 
require('should'); 
const Item = require('../../models/itemModel');

describe('ItemModel', () => {
  it('Should throw error if itemCode is empty', (done) => {
    const item = new Item();
    item.validate((err) => {
      expect(err.errors.itemCode).to.exist;
      done();
    });
  });

  it('Should throw error if itemName is empty', (done) => {
    const item = new Item();
    item.validate((err) => {
      expect(err.errors.itemName).to.exist;
      done();
    });
  });

  it('Should throw error if unitPrice is empty', (done) => {
    const item = new Item();
    item.validate((err) => {
      expect(err.errors.unitPrice).to.exist;
      done();
    });
  });

  it('Should throw error if stockCount is empty', (done) => {
    const item = new Item();
    item.validate((err) => {
      expect(err.errors.stockCount).to.exist;
      done();
    });
  });


});
