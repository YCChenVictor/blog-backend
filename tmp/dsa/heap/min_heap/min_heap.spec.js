MinHeap = require('./min_heap.js');

describe('MinHeap', () => {
  const heap = new MinHeap([5, 12, 8, 3, 9, 7]);

  // init
  test('#new', () => {
    expect(heap.values).toEqual([3, 5, 7, 12, 9, 8]);
  });

  // create
  test('#insert', () => {
    heap.insert(4);
    expect(heap.values).toEqual([3, 5, 4, 12, 9, 8, 7]);
  });

  // read
  test('findMin', () => {
    expect(heap.findMin()).toEqual(3);
  });

  // update
  test('#update', () => {
    heap.update(6, 3);
    expect(heap.values).toEqual([3, 5, 7, 6, 9, 8]);
  });

  // destroy
  test.only('#delete', () => {
    heap.delete();
    expect(heap.values).toEqual([5, 7, 12, 9, 8]);
  });
});
