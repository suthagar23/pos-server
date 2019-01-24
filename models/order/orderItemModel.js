const { Schema } = require('mongoose');

const orderItemSchema = new Schema({
  itemCode: {
    type: 'String',
    required: true,
    trim: true,
    unique: true,
    maxlength: 10,
    uppercase: true,
  },
  itemName: {
    type: 'String',
    trim: true,
    default: '',
  },
  quantity: {
    type: 'Number',
    required: true,
    min: 0,
  },
  unitPrice: {
    type: 'Number',
    required: true,
    min: 0,
  },
  discountPercentage: {
    type: 'Number',
    required: true,
    min: 0,
    max: 100,
  },
});

module.exports = orderItemSchema;
