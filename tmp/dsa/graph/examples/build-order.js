const DirectedGraph = require("../examples/directed-graph")

function buildOrder(projects, dependencies) {
  let graph = new DirectedGraph()
  projects.forEach((project) => {
    graph.addVertex(project)
  })
  dependencies.forEach((dependency) => {
    graph.addEdge(dependency[0], dependency[1])
  })

  findStarts = (projects, dependencies) => {
    dependent = dependencies.map((d) => {return d[1]})
    result = projects.filter((element) => !dependent.includes(element))
    return result
  }

  starts = findStarts(projects, dependencies)
  for(i = 0; i < starts.length; i++) {
    let start = starts[i]
    const queue = [start]
    const visits = new Set([start])

    while(queue.length) { // this is the important step of BFS
      const currentVertex = queue.shift()
      const neighbors = graph.getNeighbors(currentVertex)

      for(let neighbor of neighbors) {
        if(!visits.has(neighbor)) {
          queue.push(neighbor)
          visits.add(neighbor)
        }
      }
    }

    for(let i = 0; i < starts.length; i++) { // remember to use let...
      visits.add(starts[i])
    }

    if(projects.length === visits.size) {
      console.log(visits)
      return [...visits]
    }
  }

  return false
}

module.exports = buildOrder
