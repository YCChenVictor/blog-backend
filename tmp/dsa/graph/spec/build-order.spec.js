const buildOrder = require('../examples/build-order.js');

describe('build order', () => {
  const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
  const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

  test('#', () => {
    expect(buildOrder(projects, dependencies)).toEqual(['f', 'b', 'a', 'd', 'c', 'e']);
  });
});
