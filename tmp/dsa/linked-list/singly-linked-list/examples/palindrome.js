function palindrome (linkedList) {
  let currentNode = linkedList.head
  let fasterNode = linkedList.head
  const allValues = []
  const halfValues = []
  while (fasterNode !== null) {
    halfValues.push(currentNode.value)
    currentNode = currentNode.next

    allValues.push(fasterNode.value)
    fasterNode = fasterNode.next
    if (fasterNode !== null) {
      allValues.push(fasterNode.value)
      fasterNode = fasterNode.next
    }
  }

  for (i = halfValues.length - 1; i >= 0; i--) {
    if (halfValues[i] === allValues[allValues.length - 1 - i]) {
      continue
    } else {
      return false
    }
  }
  return true
}

module.exports = palindrome
