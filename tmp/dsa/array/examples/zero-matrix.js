function zeroMatrix(matrix) {
  rowIndex = []; // M rows
  columnIndex = []; // N columns
  for(let i = 0; i < matrix.length; i++) { // m
    for(let j = 0; j < matrix.length; j++) { // n
      if(matrix[i][j] === 0) {
        rowIndex.push(i);
        columnIndex.push(j);
      }
    }
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < columnIndex.length; j++) {
      matrix[i][columnIndex[j]] = 0;
    }
  }

  for(let i = 0; i < rowIndex.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      matrix[rowIndex[i]][j] = 0;
    }
  }

  return matrix;
}

module.exports = zeroMatrix;
