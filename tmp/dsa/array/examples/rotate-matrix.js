function rotateMatrix(matrix) {
  result = [];
  for(let i = matrix.length - 1; i >= 0; i--) {
    if(i == matrix.length - 1) {
      for(let j = 0; j < matrix[i].length; j++) {
        result.push([matrix[i][j]]);
      }
    } else {
      for(let j = 0; j < matrix[i].length; j ++) {
        result[j].push(matrix[i][j]);
      }
    }
  }
  return result;
}

module.exports = rotateMatrix;
