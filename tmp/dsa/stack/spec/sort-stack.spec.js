const sortStack = require('../examples/sort-stack');
const Stack = require('../examples/main');

describe('sort stack', () => {
  // bottom -> top
  // Input = [3, 1, 2, 4]
  // Output = [4, 3, 2, 1]
  const stack = new Stack();
  const items = [3, 1, 2, 4];
  items.forEach((item) => {stack.push(item);});
  test('#', () => {
    expect(sortStack(stack).items).toEqual([4, 3, 2, 1]);
  });
});
