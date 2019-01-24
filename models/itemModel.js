const { Schema } = require('mongoose');
const { dbConn } = require('../database/index');

const itemSchema = new Schema({
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
  itemDescription: {
    type: 'String',
    trim: true,
    default: '',
  },
  unitPrice: {
    type: 'Number',
    required: true,
    min: 0,
  },
  discountPercentage: {
    type: 'Number',
    min: 0,
    max: 100,
  },
  stockCount: {
    type: 'Number',
    required: true,
    min: 0,
  },
  registerdAt: {
    type: 'Date',
  },
  lastModifiedAt: {
    type: 'Date',
  },
  itemStatus: {
    type: 'Boolean',
    required: true,
  },
});

itemSchema.pre('save', (next) => {
  const item = this;
  const currentDate = new Date();
  if (!item.isModified || !item.isNew) {
    item.lastModifiedAt = currentDate;
    next();
  } else {
    item.registerdAt = currentDate;
    item.lastAccessedAt = currentDate;
    next();
  }
});

module.exports = dbConn.model('Item', itemSchema);
