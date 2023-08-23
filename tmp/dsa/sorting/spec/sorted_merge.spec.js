const SortedMerge = require('../examples/sorted_merge.js')

describe('SortedMerge', () => {
  it('should return sorted merged result', () => {
    expect(SortedMerge([5, 12, 18, 23, 27, 31, 42, 55, 63, 78], [9, 15, 20, 34, 45])).toEqual([5, 9, 12, 15, 18, 20, 23, 27, 31, 34, 42, 45, 55, 63, 78])
  })
})
