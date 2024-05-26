import User from '../models/user.js';
import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';
const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;

const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  },
  async (username, password, done) => {
    const user = await User.findOne({
      username,
      password,
    });

    const payload = {
      email: username,
      expireAt: Math.floor(Date.now() / 1000) + 60 * 60, // Token will expire in 1 hour
    };

    if (!user) {
      return done(null, false, { message: 'no user' });
    } else {
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
      return done(null, { token });
    }
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const jwtStrategy = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  done(null, jwtPayload);
});

passport.use(localStrategy);
passport.use(jwtStrategy);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
