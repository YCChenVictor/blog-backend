const zeroMatrix = require('../examples/zero-matrix');

describe('zero matrix', () => {
  test('#', () => {
    const matrix =  [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    expect(zeroMatrix(matrix)).toEqual([
      [0, 0, 0],
      [0, 4, 5],
      [0, 7, 8],
    ]);
  });
});
