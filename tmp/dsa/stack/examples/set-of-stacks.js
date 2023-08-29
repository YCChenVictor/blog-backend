const Stack = require('./stack.js')

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity
    this.oldStacks = []
    this.currentStack = null
  }

  push(value) {
    if(this.currentStack === null) {
      this.currentStack = new Stack()
    }
    if(this.currentStack.size() >= this.capacity) {
      this.oldStacks.push(this.currentStack)
      this.currentStack = new Stack()
    }
    this.currentStack.push(value)
  }

  pop() {
    if(this.currentStack === null && this.oldStacks.length === 0) {
      return 'no element'
    } else if(this.currentStack.size() === 0) {
      this.currentStack = this.oldStacks.pop()
      return this.currentStack.pop()
    } else {
      return this.currentStack.pop()
    }
  }
}

module.exports = SetOfStacks
