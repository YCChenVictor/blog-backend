const rotateMatrix = require('../examples/rotate-matrix')

describe('rotate matrix', () => {
  let input = [
    [1111, 2222],
    [3333, 4444],
  ]
  test('#', () => {
    expect(rotateMatrix(input)).toEqual([
      [3333, 1111],
      [4444, 2222]
    ])
  })
})
