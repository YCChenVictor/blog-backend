const gptApi = (app) => {
  app.post('/init', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ token: req.user.token });
  });
};

module.exports = gptApi;
