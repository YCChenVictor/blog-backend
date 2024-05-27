const Stack = require('./main');

function sortStack(stack) {
  // Input = [3, 1, 2, 4]
  // Output = [4, 3, 2, 1]
  const additionalStack = new Stack();
  let placeholder;

  while(!stack.isEmpty()) {
    placeholder = stack.pop();

    while(!additionalStack.isEmpty() && additionalStack.peek() > placeholder) {
      stack.push(additionalStack.pop());
    }

    additionalStack.push(placeholder);

    console.log('=============');
    console.log(stack);
    console.log(additionalStack);

    // placeholder = 4
    // stack = [3, 1]
    // add = [2, 4]

    // placeholder = 1
    // stack = [3, 4, 1]
    // add = [2]

    // placeholder = 1
    // stack = [3, 4, 2]
    // additionalStack = [1]
  }

  while (!additionalStack.isEmpty()) {
    stack.push(additionalStack.pop());
  }

  return stack;
}

module.exports = sortStack;
