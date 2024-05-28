import request from 'supertest';
import express from 'express';
import router from '../../src/routers/nodeGraphRouter';

const app = express();
app.use(express.json());
app.use('/', router);

describe('POST /create', () => {
  it('should respond with the expected data', async () => {
    const res = await request(app)
      .post('/create')
      .send({ category: 'software' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Node graph created successfully' });
  });
});
