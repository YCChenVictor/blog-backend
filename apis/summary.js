const user = require('./user.js')
const nodeGraph = require('./node-graph.js')
const searchbar = require('./searchbar.js')
const gptApis = require('./gpt-apis.js')

function apis(app) {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  user(app)
  nodeGraph(app)
  searchbar(app)
  gptApis(app)
}

module.exports = apis;
