class MaxHeap {
  constructor(values) {
    this.heap = values;
  }
  
  // create
  insert(value) {
    this.heap.unshift(value)
    this.heapify()
  }

  // read
  findMax() {
    return this.heap[0]
  }

  values() {
    return this.heap
  }

  // update
  update(value, index) {
    this.heap[index] = value
    this.heapify()
  }

  // destroy
  delete() {
    // In max heap, we usually remove the maximum value
    this.heap.shift()
    this.heapify()
  }

  heapify(i = 0) {
    const leftChildIndex = i * 2 + 1
    const rightChildIndex = i * 2 + 2

    if (i > this.heap.length) return

    let largest = i
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex
    }

    if (largest !== i) {
      // Swap the current node with the largest child
      const temp = this.heap[i];
      this.heap[i] = this.heap[largest];
      this.heap[largest] = temp;
    }

    // Recursively heapify the affected child's subtree
    this.heapify(leftChildIndex);
    this.heapify(rightChildIndex);
  }
}

module.exports = MaxHeap
