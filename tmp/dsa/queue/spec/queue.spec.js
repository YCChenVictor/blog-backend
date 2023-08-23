const Queue = require('../examples/queue.js');

describe('Queue', () => {
  let testQueue;
  beforeEach(() => {
    testQueue = new Queue();
    const values = [1, 74, 888, 62, 33];
    for(let i = 0; i < values.length; i++){
      testQueue.enqueue(values[i]);
    }
  });

  test('#init', () => {
    expect(testQueue.print()).toEqual([1, 74, 888, 62, 33])
  })

  test('#enqueue', () => {
    testQueue.enqueue(0);
    expect(testQueue.print()).toEqual([1, 74, 888, 62, 33, 0]);
  });

  test('#dequeue', () => { // first in is 1
    testQueue.dequeue();
    expect(testQueue.print()).toEqual([74, 888, 62, 33]);
  })

  test('#peek', () => {
    expect(testQueue.peek()).toEqual(1);
  });

  test('#isEmpty', () => {
    expect(testQueue.isEmpty()).toEqual(false);
  })

  test('#size', () => {
    expect(testQueue.size()).toEqual(5);
  })
});