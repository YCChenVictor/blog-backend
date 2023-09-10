const user = require('./user.js')
const nodeGraph = require('./node-graph.js')
const searchbar = require('./searchbar.js')
const gptApis = require('./gpt-apis.js')
const autoFrontend = require('./auto-frontend.js')

function apis(app) {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  user(app)
  nodeGraph(app)
  searchbar(app)
  gptApis(app)
  autoFrontend(app)
}

module.exports = apis;
