const User = require('../models/user.js')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const localStrategy = new LocalStrategy({ // here can be changed to JWT strategy
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  }, async (username, password, done) => {
    user = await User.findOne({
      username,
      password
    })
    const payload = {
      email: username,
      expireAt: Math.floor(Date.now() / 1000) + (60 * 60) // Token will expire in 1 hour
    }
    if (!user) {
      return done(null, false, { message: 'no user' })
    } else {
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)
      return done(null, {token: token})
    }
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY
}
const jwtStrategy = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  console.log(jwtPayload)
  done(null, jwtPayload)
})

passport.use(localStrategy)
passport.use(jwtStrategy)
passport.serializeUser(function(user, done) {
  done(null, user)
})
passport.deserializeUser(function(user, done) {
  done(null, user)
})

module.exports = passport
