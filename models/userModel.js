const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];

// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  firstName: {
    type: 'String',
    trim: true,
    default: ''
  },
  lastName: {
    type: 'String',
    trim: true,
    default: ''
  },
  email: {
    type: 'String',
    required: true,
    trim: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  },
  registerdAt: {
    type: 'Date'
  },
  lastAccessedAt: {
    type: 'Date'
  },
  lastModifiedAt: {
    type: 'Date'
  },
  userStatus: {
    type: 'Boolean',
    required: true
  },
  userRole: {
    type : 'String',
    required: true,
    trim: true
  }
});

// encrypt password before save
userSchema.pre('save', function(next) {
    const user = this;
    const currentDate = new Date();
    // don't rehash if it's an existing user
    if(!user.isModified || !user.isNew) { 
      user.lastModifiedAt = currentDate;
      next();
    } else {
      bcrypt.hash(user.password, stage.saltingRounds, function(err, hash) {
        if (err) {
          console.error('Error hashing password for user', user.name);
          next(err);
        } else {
          user.password = hash;
          user.registerdAt = currentDate;
          user.lastAccessedAt = currentDate;
          next();
        }
      });
    }
  });
  
module.exports = mongoose.model('User', userSchema);