function routeBetweenNodes (graph, start, end) {
  if (start === end) {
    return true
  }
  let nextNodes = graph.getNeighbors(start)
  for (let i = 0; i < nextNodes.length; i ++) {
    if (routeBetweenNodes(graph, nextNodes[i], end)) {
      return true
    }
  }
  return false
}

module.exports = routeBetweenNodes
