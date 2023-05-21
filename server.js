// init
import express from 'express';
const app = express()

// dotenv
import 'dotenv/config';

// // parse body
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())

// // passport
// const passport = require('./middleware/passport.js');
// app.use(passport.initialize());

// // CORS
// const cors = require('./middleware/cors.js');
// app.use(cors);

// API
import api from './api/api_summary.js';
if (process.env.NODE_ENV === 'development') {
  app.listen(5000, () => {
    api(app)
    console.log('now listening to 5000')
  })
} else if (process.env.NODE_ENV === 'test') {
  app.listen(8080, () => {
    api(app)
  })
} else {
  // TODO for production
}

export default app
