import express from 'express';
import nodeGraphRouter from './routers/nodeGraphRouter';

const app = express();

// hello world
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// node graph
app.use('/node-graph', nodeGraphRouter);

export default app;
