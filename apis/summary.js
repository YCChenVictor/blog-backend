const user = require('./user.js')
const frontendComponent = require('./frontend-component.js')
const gpt = require('./gpt.js')

function apis(app) {
  app.get('/', (req, res) => {
    console.log(req.query)
    res.send('Hello World!')
  })

  user(app)
  frontendComponent(app)
  gpt(app)
}

module.exports = apis;
