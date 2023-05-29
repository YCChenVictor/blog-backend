const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

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

      const token = jwt.sign({ email: newUser.email }, 'secret_key'); // Wrap the payload in an object
      res.json({ token });
    } catch (error) {
      // Handle error during user creation
      console.error(error);
      res.status(500).json({ msg: 'An error occurred' });
    }
  });

  // app.post('/login', passport.authenticate('local'), (req, res) => {
  //   res.status(200).json({ token: req.user.token });
  // });
};

module.exports = userAPIs;
