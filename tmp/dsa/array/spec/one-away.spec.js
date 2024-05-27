const oneAway = require('../examples/one-away.js');

describe('One Away', () => {
  test('paie, pie', () => {
    expect(oneAway('paie', 'pie')).toEqual(true);
  });
  test('paies, paie', () => {
    expect(oneAway('paies', 'paie')).toEqual(true);
  });
  test('paie, baie', () => {
    expect(oneAway('paie', 'baie')).toEqual(true);
  });
  test('paie, bake', () => {
    expect(oneAway('paie', 'bake')).toEqual(false);
  });
});
