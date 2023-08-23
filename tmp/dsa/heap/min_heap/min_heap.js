class MinHeap {
  constructor(values) {
    this.values = values
    this.heapify()
  }

  // create
  insert(value) {
    this.values.push(value)
    this.heapify()
  }

  // read
  findMin() {
    return this.values[0]
  }

  // update
  update(value, index) {
    this.values[index] = value
    this.heapify()
    return this.values
  }

  // destroy
  delete() {
    this.values.shift()
    this.heapify()
  }

  heapify() { // bottom up approach
    for(let i = this.values.length - 1; i >= 0; i--) {
      const leftChildIndex = i * 2 + 1
      const rightChildIndex = i * 2 + 2
    
      let smallestIndex = i
      if(this.values[i] > this.values[leftChildIndex]) {
        smallestIndex = leftChildIndex
      }
      if(this.values[smallestIndex] > this.values[rightChildIndex]) {
        smallestIndex = rightChildIndex
      }
      if(smallestIndex !== i) {
        const tmp = this.values[i]
        this.values[i] = this.values[smallestIndex]
        this.values[smallestIndex] = tmp
        this.heapify(leftChildIndex)
        this.heapify(rightChildIndex)
      }
    }
  }
}

module.exports = MinHeap
