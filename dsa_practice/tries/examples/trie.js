LinkedList = require('../../linked_list/singly_linked_list/examples/singly_linked_list.js')

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  delete(word) {
    let node = this.root
    let nodes = []
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!node.children[char]) {
        return
      }
      node = node.children[char]
      nodes.push(node)
    }
    if(!node.isEndOfWord) {
      return
    }
    for (let i = nodes.length - 2; i >= 0; i--) {
      if (Object.keys(nodes[i].children).length > 1) {
        continue
      } else {
        delete nodes[i].children[word[i + 1]] // remove the specific children of that character
      }
    }
    node.isEndOfWord = false;
  }
}

module.exports = Trie
