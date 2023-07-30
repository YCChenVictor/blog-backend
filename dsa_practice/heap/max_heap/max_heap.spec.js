const MaxHeap = require('./max_heap.js')

describe('Max Heap', () => {
  let heap = new MaxHeap([5, 7, 10, 20, 9, 15])
    
  test('insert', () => {
    heap.insert(3)
    expect(heap.values).toEqual([3, 5, 10, 20, 7, 15, 9])
  })

  test('findMin', () => {
    expect(heap.findMin()).toEqual(5)
  })

  test('update', () => {
    heap.update(3, 2)
    // [5, 7, 10, 20, 9, 15]
    // [5, 3, 10, 20, 9, 15]
    // [3, 5, 10, 20, 9, 15]
    expect(heap.values).toEqual([3, 5, 10, 20, 9, 15])
  })

  test('delete', () => {
    heap.delete()
    expect(heap.values).toEqual([7, 10, 20, 9, 15])
  })

  test('heapify', () => {
    let randomHeap = new MaxHeap([10, 20, 5, 15, 9, 7])
    randomHeap.heapify()
    expect(randomHeap.values).toEqual([5, 7, 10, 20, 9, 15])
  })
})
