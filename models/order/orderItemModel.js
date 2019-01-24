const { Schema } = require('mongoose');

const orderItemSchema = new Schema({
  itemCode: {
    type: 'String',
    required: true,
    trim: true,
    unique: true,
  },
  itemName: {
    type: 'String',
    trim: true,
    default: '',
  },
  quantity: {
    type: 'Number',
    required: true,
  },
  unitPrice: {
    type: 'Number',
    required: true,
  },
  discountPercentage: {
    type: 'Number',
    required: true,
  },
});

module.exports = orderItemSchema;
