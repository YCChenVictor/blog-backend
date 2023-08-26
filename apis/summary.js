const user = require('./user.js')
const nodeGraph = require('./node-graph.js')
const searchbar = require('./searchbar.js')
const gpt = require('./gpt.js')

function apis(app) {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  user(app)
  nodeGraph(app)
  searchbar(app)
  gpt(app)
}

module.exports = apis;
