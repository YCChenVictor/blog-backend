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

    if (!user) {
      return done(null, false, { message: 'no user' });
    } else {
      const token = jwt.sign(user.email, 'secret_key');
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
