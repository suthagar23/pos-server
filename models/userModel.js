const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const { dbConn } = require('../database/index');
const authOptions = require('../config/serverConfig').auth;


const userSchema = new Schema({
  userName: {
    type: 'String',
    required: true,
    trim: true,
    unique: true,
    maxlength: 25,
    lowercase: true,
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
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
    },
  },
  password: {
    type: 'String',
    required: true,
    trim: true,
    select: false,
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
    maxlength: 15,
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

userSchema.methods = {
  getFieldsForAuth() {
    return {
      userId: this._id,
      userName: this.userName,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      userStatus: this.userStatus,
      userRole: this.userRole,
    };
  },

  /** Override the res.json(user) to avoid password */
  toRegJSON() {
    return {
      userId: this._id,
      userName: this.userName,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      userStatus: this.userStatus,
      userRole: this.userRole,
      lastAccessedAt: this.lastAccessedAt,
      lastModifiedAt: this.lastModifiedAt,
      registerdAt: this.registerdAt,
    };
  },
};

userSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

module.exports = dbConn.model('User', userSchema);
