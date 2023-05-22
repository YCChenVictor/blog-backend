// import passport from '../middleware/passport.js'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

const userAPIs = (app) => {
  app.post('/signup', async (req, res, next) => {
    const { email, password } = req.body.params; // Destructure email and password from req.body.params

    if (!email || !password) {
      return res.status(401).json({ msg: 'Please enter all fields' });
    }

    try {
      const user = await User.create({
        email,
        password
      });

      const token = jwt.sign({ email: user.email }, 'secret_key'); // Wrap the payload in an object
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

export default userAPIs
