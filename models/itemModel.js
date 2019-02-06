const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
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
    required: true,
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

// // Save registered date,lastModified date, and lastAccessed date while saving items
// itemSchema.pre('save', (next) => {
//   const item = this;
//   const currentDate = new Date();
//   // Don't add registered date if this item is an existing one
//   if (typeof item.registerdAt !== 'undefined') {
//     item.lastModifiedAt = currentDate;
//     next();
//   } else {
//     item.registerdAt = currentDate;
//     item.lastAccessedAt = currentDate;
//     next();
//   }
// });

module.exports = mongoose.model('Item', itemSchema);
