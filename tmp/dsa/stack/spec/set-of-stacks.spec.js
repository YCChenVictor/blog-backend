const SetOfStacks = require('../examples/set-of-stacks.js');

describe('set of stacks', () => {
  describe('capacity === 3', () => {
    describe('existed elements = [1, 2, 3, 4, 5, 6]', () => {
      const setOfStacks = new SetOfStacks(3);
      beforeEach(() => {
        [1, 2, 3, 4, 5, 6].forEach((element) => {
          setOfStacks.push(element);
        });
      });
      it('#push 7', () => {
        setOfStacks.push(7);
        expect(setOfStacks.oldStacks.length).toEqual(2);
      });
    });

    describe('three stacks but last stack is empty', () => {
      const setOfStacks = new SetOfStacks(3);
      beforeEach(() => {
        [1, 2, 3, 4, 5, 6, 7].forEach((element) => {
          setOfStacks.push(element);
        });
        setOfStacks.pop();
      });
      it('#pop', () => {
        expect(setOfStacks.pop()).toEqual(6);
        expect(setOfStacks.oldStacks.length).toEqual(1);
      });
    });

    describe('existed elements is none', () => {
      const setOfStacks = new SetOfStacks(3);
      it('#pop', () => {
        expect(setOfStacks.pop()).toEqual('no element');
      });
    });
  });
});
