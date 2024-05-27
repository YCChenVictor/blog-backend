const { Node, LinkedList } = require('../main.js');
const loopDetection = require('../examples/loop-detection.js');

describe('loop detection', () => {
  const values = ['A', 'B', 'C', 'D', 'E'];
  const nodes = values.map((value) => {return new Node(value);});
  const linkedList = new LinkedList();
  linkedList.prependNode(nodes[2]);
  linkedList.prependNode(nodes[4]);
  linkedList.prependNode(nodes[3]);
  linkedList.prependNode(nodes[2]);
  linkedList.prependNode(nodes[1]);
  test('#', () => {
    expect(loopDetection(linkedList)).toEqual('C');
  });
});
