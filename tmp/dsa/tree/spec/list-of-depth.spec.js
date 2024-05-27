const BinaryTree = require('../main.js');
const listOfDepths = require('../examples/list-of-depth.js');

describe('List Of Depths', () => {
  describe('', () => {
    const binaryTree = new BinaryTree();
    beforeEach(() => {
      const values = [1, 2, 3];
      for (i = 0; i < values.length; i++) {
        binaryTree.addNode(values[i]);
      }
    });
    //   1
    //  / \
    // 2   3
    test('#', () => {
      expect(listOfDepths(binaryTree).printList()).toEqual([1, 2, 3]);
    });
  });
});
