const MaxHeap = require('./max_heap.js');

describe('Max Heap', () => {
  let heap;
  beforeEach(async () => {
    heap = new MaxHeap([20, 9, 15, 5, 7, 10]);
  });
  
  test('insert', () => {
    heap.insert(3);
    expect(heap.values()).toEqual([20, 15, 10, 3, 5, 7, 9]);
  });

  test('update', () => { // check next time. It's wrong
    heap.update(3, 2);
    // [20, 9, 3, 5, 7, 10]
    expect(heap.values()).toEqual([20, 9, 10, 5, 7, 3]);
  });

  test('delete', () => {
    heap.delete();
    expect(heap.values()).toEqual([15, 10, 5, 7, 9]);
  });

  test('findMax', () => {
    expect(heap.findMax()).toEqual(20);
  });

  test('heapify', () => {
    const randomHeap = new MaxHeap([10, 20, 5, 15, 9, 7]);
    randomHeap.heapify();
    expect(randomHeap.values()).toEqual([20, 15, 7, 10, 9, 5]);
  });
});
