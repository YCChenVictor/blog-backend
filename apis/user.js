const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const passport = require('../middleware/passport.js');

const userAPIs = (app) => {
  app.post('/signup', async (req, res, next) => {
    const { email, password } = req.body.params; // Destructure email and password from req.body.params

    if (!email || !password) {
      return res.status(401).json({ msg: 'Please enter all fields' });
    }

    try {
      const newUser = await User.create({
        email,
        password
      });

      const payload = {
        email: email,
        expireAt: Math.floor(Date.now() / 1000) + (60 * 60) // Token will expire in 1 hour
      }
      const token = jwt.sign(payload, 'secret_key'); // Wrap the payload in an object
      res.json({ token });
    } catch (error) {
      // Handle error during user creation
      console.error(error);
      res.status(500).json({ msg: 'An error occurred' });
    }
  });

  app.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ token: req.user.token });
  });
};

module.exports = userAPIs;
