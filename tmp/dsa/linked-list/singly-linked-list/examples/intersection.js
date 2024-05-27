function intersection(singlyLinkedList1, singlyLinkedList2) {
  const head1 = singlyLinkedList1.head;
  const nodes1 = {
    [head1.value]: [head1]
  };

  let currentNode1 = head1;
  while(currentNode1 !== null) {
    // if(nodes1[currentNode1.value] === undefined) {nodes1[currentNode1.value] = []}
    // nodes1[currentNode1.value] << currentNode1
    currentNode1 = currentNode1.next;
  }

  const head2 = singlyLinkedList2.head;
  let currentNode2 = head2;
  while(currentNode2 !== null) {
    targetNodes = nodes1[currentNode2.value];
    if(targetNodes && targetNodes.includes(currentNode2)) {
      return true;
    }
    currentNode2 = currentNode2.next;
  }
  return false;
}

module.exports = intersection;
