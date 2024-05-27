const { Node, LinkedList } = require('../main.js');
const intersection = require('../examples/intersection.js');

describe('intersection', () => {
  const nodes = ['a1', 'a2', 'c1', 'c2', 'c3', 'b1', 'b2', 'b3'].map((value) => {
    return new Node(value);
  });

  describe('has intersection', () => {
    const linkedList1 = new LinkedList();
    const linkedList2 = new LinkedList();

    beforeEach(() => {
      linkedList1.prependNode(nodes[0]);
      linkedList1.prependNode(nodes[1]);
      linkedList1.prependNode(nodes[2]);
      linkedList1.prependNode(nodes[3]);
      linkedList1.prependNode(nodes[4]);

      linkedList2.prependNode(nodes[5]);
      linkedList2.prependNode(nodes[6]);
      linkedList2.prependNode(nodes[7]);
      linkedList2.prependNode(nodes[2]);
      linkedList2.prependNode(nodes[3]);
      linkedList2.prependNode(nodes[4]);
    });
    test('#', () => {
      expect(intersection(linkedList1, linkedList2)).toEqual(true);
    });
  });

  describe('has no intersection', () => {
    const linkedList1 = new LinkedList();
    const linkedList2 = new LinkedList();

    beforeEach(() => {
      linkedList1.prepend(nodes[0]);
      linkedList1.prepend(nodes[1]);
      linkedList2.prepend(nodes[5]);
      linkedList2.prepend(nodes[6]);
      linkedList2.prepend(nodes[7]);
    });
    test('#', () => {
      expect(intersection(linkedList1, linkedList2)).toEqual(false);
    });
  });
});
