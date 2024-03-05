console.log(message); // undefined, it will not throw error
var message = "Hello, hoisting!";
console.log(message); // "Hello, hoisting!"
    
// Example of hoisting with function declaration
sayHello(); // "Hello, hoisting!"
function sayHello() {
  console.log("Hello, hoisting!");
}