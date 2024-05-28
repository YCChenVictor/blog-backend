const request = require('supertest');
const app = require('../server');
const apis = require('../apis/summary');

describe('HelloWorld', () => {
  let server;

  beforeEach (() => {
    server = app.listen(0);
    apis(app);
  });

  afterEach(() => {
    server.close();
  });

  describe('GET /', () => {
    test('should return Hello World!', () => {
      request(app).get('/').then(response => {
        expect(response.text).toEqual('Hello World!');
      });
    });
  });
});
