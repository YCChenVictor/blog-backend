const input = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt",
]

// I am solving leetcode, alien dictionary, please check my function and return me more efficiency answer

function alienDictionary(input) {
  // My thought is reading these string in vertical. Like w, w, e, e, r, r, r, t, f, t, f, t, t, t
  // And record a set storing appeared letters to avoid adding duplicate letters
  let result = ""

  let lengthOfCols = 0
  for(let i = 0; i < input.length; i++) { // maybe the longest string is always the last one?
    console.log(input[i].length)
    if(input[i].length > lengthOfCols) {
      lengthOfCols = input[i].length
    }
  }

  const visited = new Set()
  for(let j = 0; j < lengthOfCols; j++) {
    for(let i = 0; i < input.length; i++) {
      if(visited.has(input[i][j]) || input[i][j] === undefined) {
        continue
      } else {
        result += input[i][j]
        visited.add(input[i][j])
      }
    }
  }

  return result
}

// GPT told me topological way is more efficient as it is O(C), where C = n1 + n2 + ... + n and my way has O(m * n), where m is the number of words and n is the maximum length of the word 

function alienDictionary(words) {
  const adjList = new Map();
  const inDegree = new Map();
  
  // Initialize adjacency list and in-degree for each letter
  for (const word of words) {
    for (const char of word) {
      adjList.set(char, []);
      inDegree.set(char, 0);
    }
  }
  
  // Build the graph (compare adjacent words)
  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];
    const minLength = Math.min(currentWord.length, nextWord.length);
  
    for (let j = 0; j < minLength; j++) {
      const currentChar = currentWord[j];
      const nextChar = nextWord[j];
  
      if (currentChar !== nextChar) {
        adjList.get(currentChar).push(nextChar);
        inDegree.set(nextChar, inDegree.get(nextChar) + 1);
        break; // Break the loop when the first differing character is found
      }
    }
  }

  // w -> e
  // e -> r
  // r -> t
  // t -> f

  // Then I think we can directly start from w and do DFS: w -> e -> r -> t -> f and if circle, then return false

  console.log(adjList)
  console.log(inDegree)
  
  // Perform topological sorting using BFS
  const result = [];
  const queue = [];
  
  // Enqueue characters with in-degree of 0
  for (const [char, degree] of inDegree.entries()) {
    if (degree === 0) {
      queue.push(char);
    }
  }
  
  while (queue.length > 0) {
    const currentChar = queue.shift();
    result.push(currentChar);
  
    for (const neighbor of adjList.get(currentChar)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
  
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  // Check for cycles (if not all letters are visited)
  if (result.length !== inDegree.size) {
    return ""; // There is a cycle, return an empty string
  }
  
  return result.join("");
}

alienDictionary(input)
