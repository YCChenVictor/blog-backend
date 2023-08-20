// make the following as a middleware
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, 'secret_key', (error, decoded) => {
      if (error) {
        res.status(401).json({ message: 'Invalid token' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No token provided' })
  }
})
