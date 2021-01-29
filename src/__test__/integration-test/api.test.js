const request = require('supertest');
const app = require('../../server');
const users = require('../__mocks__/users.mock');

describe('User API', () => {
  const { id, ..._user } = users[3];
  it('GET / should return the users when called', (done) => {
    request(app.start_test())
      .get('/api/users')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).not.toBeNull();
        expect(res.body).not.toBeUndefined();
        done();
      });
  });

  it('GET / should return one user when called', (done) => {
    request(app.start_test())
      .get('/api/user/600c88d305d649a01f133998')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toHaveProperty(['data', 'id']);
        expect(res.body.data.id).toMatch(/^[0-9a-fA]{24}$/);
        expect(res.body).not.toBeNull();
        expect(res.body).not.toBeUndefined();
        done();
      });
  });

  it('POST / should create a user', (done) => {
    request(app.start_test())
      .post('/api/user')
      .send(_user)
      .expect('Content-type', /json/)
      .expect(201, done);
  });

  it('PATCH /should return a updated user', (done) => {
    request(app.start_test())
      .patch('/api/user/600c88d305d649a01f133998')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toHaveProperty(['response', 'id']);
        expect(res.body).not.toBeNull();
        expect(res.body).not.toBeUndefined();
        done();
      });
  });

  it('DELETE /should return a true flag', (done) => {
    request(app.start_test())
      .delete('/api/user/600c88d305d649a01f133998')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toBeTruthy();
        expect(res.body).not.toBeNull();
        expect(res.body).not.toBeUndefined();
        done();
      });
  });

  it('GET / should return a 404 status code', (done) => {
    request(app.start_test())
      .get('/api/all-users-wrong/list')
      .expect('Content-type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).not.toBeNull();
        expect(res.body).not.toBeUndefined();
        done();
      });
  });
});
