function twoSum (array, target) {
  const hash = {};
  for (i = 0; i < array.length; i++) {
    if (hash[array[i]] !== undefined) {
      return [hash[array[i]], i];
    } else {
      hash[target - array[i]] = i;
    }
  }
  return 'no';
}

module.exports = twoSum;
