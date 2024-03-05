const edges = [[0, 1], [1, 2], [3, 4]]
const numberOfNodes = 5

function numberOfConnectedComponents(n, edges) {
  // my thought is trying to use DFS to traverse all nodes
  // If all nodes can be found by one search, then the result is one
  // else result add 1 for starting another new search

  let result = 0
  const visited = new Array(n).fill(false) // the node numbering is serial
  const adjacency = {}

  for(edge of edges) {
    if(!adjacency[edge[0]]) {
      adjacency[edge[0]] = []
    }
    adjacency[edge[0]].push(edge[1])
  }

  function dfs(node) {
    visited[node] = true
  
    if (adjacency[node]) {
      for (const neighbor of adjacency[node]) {
        if(!visited[neighbor]) {
          dfs(neighbor)
        }
      }
    }
  }

  for(let i = 0; i < visited.length; i++) {
    if(!visited[i]) {
      dfs(i)
      result += 1
    }
  }
  return result
}

numberOfConnectedComponents(numberOfNodes, edges)
