const DirectedGraph = require('../examples/directed-graph.js')
const routeBetweenNodes = require('../examples/route-between-nodes.js')

describe('Route Between Nodes', () => {
  let testGraph
  beforeEach(() => {
    testGraph = new DirectedGraph();
    ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach((node) => {
      testGraph.addVertex(node);
    });
    [['A', 'B'], ['B', 'D'], ['B', 'E'], ['E', 'F'], ['A', 'C'], ['C', 'F']].forEach(edge => testGraph.addEdge(edge[0], edge[1]))
  })

  test('#', () => {
    expect(routeBetweenNodes(testGraph, 'A', 'F')).toEqual(true)
    expect(routeBetweenNodes(testGraph, 'C', 'E')).toEqual(false)
  })
})
