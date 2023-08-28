class DirectedGraph {
  // Adjacency list form
  // Directed edges
  // No attributes on edges and nodes
  constructor() {
    this.adjacencyList = {}
  }
  
  // create
  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
  }
  
  // read
  getNeighbors(vertex) {
    return this.adjacencyList[vertex]
  }
  
//   getVertices() {
//     return Object.keys(this.adjacencyList).map(Number)
//   }
  
//   getEdges() {
//     const edges = new Set() // use set
//     for (let [vertexOne, vertexTwos] of Object.entries(this.adjacencyList)) {
//       vertexTwos.forEach((vertexTwo) => {edges.add([parseInt(vertexOne), vertexTwo])})
//     }
//     return edges
//   }
  
  findVertex(vertex) {
    const vertices = Object.keys(this.adjacencyList)
    return vertices.indexOf(vertex) !== -1
  }
  
  findEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1.toString()].includes(vertex2)
  }
  
  // update
  // There will be no update methods for vertex and edge because in this
  // class there is no attributes for both of them.
  
  // destroy
//   removeEdge(vertex1, vertex2) {
//     let index2 = this.adjacencyList[vertex1].indexOf(vertex2)
//     let index1 = this.adjacencyList[vertex2].indexOf(vertex1)
//     if (index2 > -1) {
//       this.adjacencyList[vertex1].splice(index2, 1)
//     }
//     if (index1 > -1) {
//       this.adjacencyList[vertex2].splice(index1, 1)
//     }
//   }
  
//   removeVertex(vertex) {
//     while (this.adjacencyList[vertex].length) {
//       const neighborVertex = this.adjacencyList[vertex].pop();
//       this.removeEdge(vertex, neighborVertex)
//     }
//     delete this.adjacencyList[vertex.toString()]
//   }
}
  
module.exports = DirectedGraph
  