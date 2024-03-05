// init
import express from 'express'
const app = express()

// dotenv
import dotenv from 'dotenv'
dotenv.config()

// parse body
import bodyParser from 'body-parser'
app.use(bodyParser.json())

// passport
import passport from './middleware/passport.js'
app.use(passport.initialize())

// session:
import session from 'express-session'
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}))

// CORS
import cors from './middleware/cors.js'
app.use(cors)

// API
import api from './apis/summary.js'
api(app)

// start
if (process.env.NODE_ENV === 'development') {
  const PORT = 5000
  app.listen(PORT, () => {
    console.log('in development mode')
    console.log(`now listening to ${PORT}`)
  })
} else {
  // TODO for production
}

export default app
