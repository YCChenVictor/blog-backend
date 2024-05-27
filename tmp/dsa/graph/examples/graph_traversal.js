const Graph = require('./graph.js');

class GraphTraversal extends Graph {
  depthFirstSearch(vertex, visited = new Set()) {
    visited.add(vertex);
    this.getNeighbors(vertex).forEach(neighbor => {
      if(!visited.has(neighbor)) {
        this.depthFirstSearch(neighbor, visited);
      }
    });
    return visited;
  }
    
  breadthFirstSearch(startingVertex) {
    const queue = [startingVertex];
    const visited = new Set([startingVertex]);

    while (queue.length) {
      const currentVertex = queue.shift();
      const neighbors = this.getNeighbors(currentVertex);
  
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    return visited;
  }
}
  
module.exports = GraphTraversal;
  