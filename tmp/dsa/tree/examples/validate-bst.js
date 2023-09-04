function validateBST(node, min, max) {
  console.log(node)
  if (node === null) {
    return true; // An empty tree is a valid BST.
  }

  if (node.value <= min || node.value >= max) {
    return false; // Node value violates BST property.
  }

  // Check left subtree with updated max value, and right subtree with updated min value.
  return (
    validateBST(node.left, min, node.value) &&
    validateBST(node.right, node.value, max)
  );
}

module.exports = validateBST
