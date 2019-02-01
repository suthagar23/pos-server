const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
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

// Encrypt password before save
userSchema.pre('save', (next) => {
  const user = this;
  const currentDate = new Date();
  if (typeof user.registerdAt !== 'undefined') {
    user.lastModifiedAt = currentDate;
    next();
  } else {
    user.registerdAt = currentDate;
    user.lastAccessedAt = currentDate;
    next();
  }
});


// Get all fields from userModel including password for authentications
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

  // Override the res.json(user) to avoid password
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

// Custom validation message for an existing user
userSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

module.exports = mongoose.model('User', userSchema);
