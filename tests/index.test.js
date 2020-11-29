const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should respond with hello world', (done) => {
    request(app).get('/').expect('hello world', done);
  });
});
