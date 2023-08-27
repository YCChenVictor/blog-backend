const LinkedList = require('../main.js')
const palindrome = require('../examples/palindrome.js')

describe('Palindrome', () => {
  describe('1 -> 2 -> 1', () => {
    const linkedList = new LinkedList

    beforeEach(() => {
      linkedList.prepend(1)
      linkedList.prepend(2)
      linkedList.prepend(1)
    })

    test('#', () => {
      expect(palindrome(linkedList)).toEqual(true)
    })
  })

  describe('1 -> 2 -> 2 -> 1', () => {
    const linkedList = new LinkedList

    beforeEach(() => {
      linkedList.prepend(1)
      linkedList.prepend(2)
      linkedList.prepend(2)
      linkedList.prepend(1)
    })

    test('#', () => {
      expect(palindrome(linkedList)).toEqual(true)
    })
  })

  describe('1 -> 2 -> 3 -> 1', () => {
    const linkedList = new LinkedList

    beforeEach(() => {
      linkedList.prepend(1)
      linkedList.prepend(2)
      linkedList.prepend(3)
      linkedList.prepend(1)
    })

    test('#', () => {
      expect(palindrome(linkedList)).toEqual(false)
    })
  })
})

