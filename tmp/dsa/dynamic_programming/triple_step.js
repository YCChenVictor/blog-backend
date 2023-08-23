function childHop(n) {
  if (n == 1) {
    // [1]
    return 1
  } else if (n == 2) {
    // [1, 1], [2]
    return 2
  } else if (n == 3) {
    // [1, 1, 1], [2, 1], [1, 2], [3]
    return 4
  } else {
    return childHop(n - 3) + childHop(n-2) + childHop(n-1)
  }
}

module.exports = childHop
