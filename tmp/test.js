const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

var spiralMatrix = function(matrix) {
  // use remove logic
  let result = [];
  const dupMatrix = matrix;
  while(dupMatrix.length !== 0) {
    result = result.concat(outerLayer(dupMatrix));
  }
  return result;

  function outerLayer(matrix) {
    rightSide = [];
    for(let i = 1; i < matrix.length - 1; i++) {
      rightSide.push(matrix[i].pop());
    }
    leftSide = [];
    for(let j = 1; j < matrix.length - 1; j++) {
      leftSide.push(matrix[j].shift());
    }
    const outerLayerResult = matrix.shift().concat(rightSide).concat(matrix.pop().reverse()).concat(leftSide);
    return outerLayerResult;
  }
};

spiralMatrix(matrix); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
