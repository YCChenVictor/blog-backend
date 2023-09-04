const BinaryTree = require('../main')
const validateBST = require('../examples/validate-bst')

describe('validate BST', () => {
  let tree = new BinaryTree()
  test('BST', () => {
    //     10
    //    /  \
    //   5    15
    //  / \   / \
    // 3   7 12  17
    tree.addNode(10);
    tree.addNode(5);
    tree.addNode(15);
    tree.addNode(3);
    tree.addNode(7);
    tree.addNode(12);
    tree.addNode(17);

    expect(validateBST(tree.root)).toEqual(true)
  })
})
