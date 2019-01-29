/* eslint-disable */
require('chai').expect; // eslint-disable-line
require('should'); // eslint-disable-line
const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../index');


test('Should pass /users', (done) => {
  afterAll(() => mongoose.disconnect());
  afterAll(() => app.close());
  request(app)
    .get('/api/v1/users')
    .set('Accept', 'application/json')
    .expect(500)
    .expect('Content-Type', /json/)
    // .expect(isValidOrg)
    // .end(done);
    .end((err, res) => {
    //   expect(res.body.status).to.equal(401);
      // res.status.should.equal(401);
      // res.body.error.should.equal('Authentication error. Token required.');
      if (err) throw done(err);
      done();
    });
});
