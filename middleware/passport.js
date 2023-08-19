const User = require('../models/user.js');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');

const customizedPassport = passport.use(
  new LocalStrategy({ // here can be changed to JWT strategy
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
      return done(null, false, { message: 'no user' });
    } else {
      const token = jwt.sign(payload, 'secret_key');
      return done(null, {token: token});
    }
  })
);

customizedPassport.serializeUser(function(user, done) {
  done(null, user);
});

customizedPassport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = customizedPassport
