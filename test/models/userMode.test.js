/* eslint-disable */
let expect = require('chai').expect; 
require('should'); 
const User = require('../../models/userModel');

describe('UserModel', () => {
  it('Should throw error if username is empty', (done) => {
    const user = new User();
    user.validate((err) => {
      expect(err.errors.userName).to.exist;
      done();
    });
  });

  it('Should throw error if password is empty', (done) => {
    const user = new User();
    user.validate((err) => {
      expect(err.errors.password).to.exist;
      done();
    });
  });

  it('Should throw error if email is empty', (done) => {
    const user = new User();
    user.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });
  });

  it('Should throw error if email is worong format', (done) => {
    const user = new User();
    user.email = "wrongemail";
    user.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });
  });

  it('Should Not throw error if email is correct format', (done) => {
    const user = new User();
    user.email = "correctemail@host.com";
    user.validate((err) => {
      expect(err.errors.email).to.not.exist;
      done();
    });
  });

});
