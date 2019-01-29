const { Schema } = require('mongoose');
const { dbConn } = require('../../database/index');
const { ORDER_STATUS } = require('../../config/orderScopeConfig');
const orderItemSchema = require('./orderItemModel');

// Generate all available Order Status array
function generateOrderStatusEnums() {
  return Object.keys(ORDER_STATUS);
}

const orderSchema = new Schema({
  orderStatus: {
    type: 'String',
    required: true,
    trim: true,
    enum: generateOrderStatusEnums(),
    uppercase: true,
  },
  orderMadeByUserId: {
    type: 'String',
    trim: true,
    default: '',
  },
  orderStaredDate: {
    type: 'Date',
  },
  orderEndedDate: {
    type: 'Date',
  },
  orderItems: [orderItemSchema],
  orderGrossAmount: {
    type: 'Number',
    default: 0,
    min: 0,
  },
  orderNetAmount: {
    type: 'Number',
    default: 0,
    min: 0,
  },
  lastModifiedAt: {
    type: 'Date',
  },
});

// Save registered date,lastModified date, and lastAccessed date while saving orders
orderSchema.pre('save', (next) => {
  const item = this;
  const currentDate = new Date();
  if (!item.isModified || !item.isNew) {
    item.lastModifiedAt = currentDate;
    next();
  } else {
    item.orderStaredDate = currentDate;
    item.lastModifiedAt = currentDate;
    item.orderStatus = ORDER_STATUS.NEW_ORDER;
    next();
  }
});

module.exports = dbConn.model('Order', orderSchema);
