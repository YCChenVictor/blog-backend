function loopDetection(linkedList) {
  const hash = {};
  let currentNode = linkedList.head;

  while(currentNode) {
    if(!hash[currentNode.value]) {
      hash[currentNode.value] = [currentNode];
    } else if(hash[currentNode.value]) {
      if(hash[currentNode.value].includes(currentNode)) {
        return currentNode.value;
      }
    }

    currentNode = currentNode.next;
  }
  
  return false;
}

module.exports = loopDetection;
