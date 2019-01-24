const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');
const { dbConn } = require('../database/index');
const authOptions = require('../config').auth;

const userSchema = new Schema({
  userName: {
    type: 'String',
    required: true,
    trim: true,
    unique: true,
  },
  firstName: {
    type: 'String',
    trim: true,
    default: '',
  },
  lastName: {
    type: 'String',
    trim: true,
    default: '',
  },
  email: {
    type: 'String',
    required: true,
    trim: true,
  },
  password: {
    type: 'String',
    required: true,
    trim: true,
  },
  registerdAt: {
    type: 'Date',
  },
  lastAccessedAt: {
    type: 'Date',
  },
  lastModifiedAt: {
    type: 'Date',
  },
  userStatus: {
    type: 'Boolean',
    required: true,
  },
  userRole: {
    type: 'String',
    required: true,
    trim: true,
  },
});

// encrypt password before save
userSchema.pre('save', (next) => {
  const user = this;
  const currentDate = new Date();
  // don't rehash if it's an existing user
  if (!user.isModified || !user.isNew) {
    user.lastModifiedAt = currentDate;
    next();
  } else {
    bcrypt.hash(user.password, authOptions.saltingRounds, (err, hash) => {
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

module.exports = dbConn.model('User', userSchema);
