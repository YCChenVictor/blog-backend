const stringCompression = require('../examples/string-compression.js');

describe('stringCompression', () => {
  test('aabcccccaaa', () => {
    expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
  });
  test('a', () => {
    expect(stringCompression('a')).toEqual('a');
  });
});
