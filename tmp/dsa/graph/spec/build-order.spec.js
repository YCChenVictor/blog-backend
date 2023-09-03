const buildOrder = require('../examples/build-order.js')

describe('build order', () => {
  let projects = ['a', 'b', 'c', 'd', 'e', 'f']
  let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]

  test('#', () => {
    expect(buildOrder(projects, dependencies)).toEqual(['f', 'b', 'a', 'd', 'c', 'e'])
  })
})
