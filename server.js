// init
const express = require('express');
const app = express();

// dotenv
require('dotenv').config();

// parse body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// // passport
// const passport = require('./middleware/passport.js');
// app.use(passport.initialize());

// session:
const session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));

// CORS
const cors = require('./middleware/cors.js');
app.use(cors);

// API
const api = require('./apis/api_summary.js');
if (process.env.NODE_ENV === 'development') {
  app.listen(5000, () => {
    api(app);
    console.log('now listening to 5000');
  });
} else if (process.env.NODE_ENV === 'test') {
  app.listen(8080, () => {
    api(app);
  });
} else {
  // TODO for production
}

module.exports = app;
