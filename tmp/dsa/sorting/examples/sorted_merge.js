SortedMerge = (arrayA, arrayB) => {
  const result = [];
  let largestIndexA = 0;
  let largestIndexB = 0;
  while ((largestIndexA < arrayA.length) && (largestIndexB < arrayB.length)) {
    const elementA = arrayA[largestIndexA];
    const elementB = arrayB[largestIndexB];

    if (elementA <= elementB) {
      result.push(elementA);
      largestIndexA += 1;
    } else {
      result.push(elementB);
      largestIndexB += 1;
    }
  }

  result.push(...arrayA.slice(largestIndexA));
  result.push(...arrayB.slice(largestIndexB));

  return result;
};

module.exports = SortedMerge;
