const LinkedList = require('../../linked-list/singly-linked-list/main.js')

function listOfDepths (binaryTree) {
  const root = binaryTree.root
  const nodes = []
  const queue = []

  queue.push(root)
  while (queue.length !== 0) {
    const insertNode = queue.shift()
    nodes.push(insertNode)
    if (insertNode.left !== null) queue.push(insertNode.left)
    if (insertNode.right !== null) queue.push(insertNode.right)
  }

  linkedList = new LinkedList()
  let previousNode
  for (let i = 0; i < nodes.length; i ++) {
    if (linkedList.head === null) {
      linkedList.head = nodes[i]
      previousNode = nodes[i]
    } else {
      previousNode.next = nodes[i]
      previousNode = nodes[i]
    }
  }

  return linkedList
}

module.exports = listOfDepths
