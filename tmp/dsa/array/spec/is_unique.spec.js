const charactersIsUnique = require('../examples/is_unique.js');

describe('Is Unique', () => {
  test('s = example', () => {
    const s = 'example';
    expect(charactersIsUnique(s)).toEqual(false);
  });
  test('s = fast', () => {
    const s = 'fast';
    expect(charactersIsUnique(s)).toEqual(true);
  });
});
