// Please help me correct my answer of this leetcode question

// Question
// Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

// Example 1:

// Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
// Output: true

// Example 2:

// Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
// Output: false
// Note: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.

// Answer
const edges = [[0,1], [1,2], [2,3], [1,3], [1,4]];

function graphValidTree(edges) {
  // try the concept of BFS. If it is a defined tree, then all the nodes should be visited only once
  const root = 0;
  const queue = [root];
  const visited = new Set([root]);
  while(queue.length) {
    const current = queue.shift();
    for(let i = 0; i < edges.length; i++) {
      if(edges[i][0] === current) {
        next = edges[i][1];
        if(visited.has(next)) {
          return false;
        } else {
          visited.add(next);
          queue.push(next); // queue here to remove unnecessary iterations
        }
      }
      console.log(visited);
    }
  }
  return true;
}

graphValidTree(edges);
