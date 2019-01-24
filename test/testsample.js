let expect = require('chai').expect; // eslint-disable-line
// const mongoose = require('mongoose');

// var isValidOrg = function(res) {
//   expect(res.body.status).to.equal(401);
// };

function sum(a, b) {
  return a + b;
}

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).to.be(2);
});


// const request = require('supertest');
// const app = require('../index');

// test('should pass integration tests', (done) => {
//   afterAll(() => mongoose.disconnect());
//   afterAll(() => app.close());
//   request(app)
//     .get('/api/v1/users')
//     .set('Accept', 'application/json')
//     .expect(401)
//     .expect('Content-Type', /json/)
//     // .expect(isValidOrg)
//     // .end(done);
//     .end((err) => {
//       // expect(res.body.status).to.equal(401);
//       if (err) throw done(err);
//       done();
//     });
// });


// describe('Test the addLike method', () => {
//   test('should pass integration tests', (done) => {
//     // afterAll(() => mongoose.disconnect());
//     // afterAll(() => app.close());
//     request(app)
//       .get('/sutha')
//       .expect(200)
//   })
// })

// var supertest = require("supertest");
// var should = require("should");

// // This agent refers to PORT where program is runninng.

// // var server = supertest.agent("http://localhost:3000");

// // UNIT test begin

// describe("SAMPLE unit test",function(){

//   // #1 should return home page

//   it("should return home page",function(done){

//     // calling home page api
//     server
//     .get("/sutha")
//     .expect("Content-type",/json/)
//     .expect(200) // THis is HTTP response
//     .end(function(err,res){
//       // HTTP status should be 200
//       res.status.should.equal(200);
//       // Error key should be false.
//       // res.body.error.should.equal(false);
//       done();
//     });
//   });

// });
