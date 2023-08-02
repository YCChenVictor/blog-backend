childHop = require('./triple_step.js')

describe('Triple Step', () => {
  test('when the stair has 5 steps', () => {
    expect(childHop(5)).toEqual(13)
  })
})