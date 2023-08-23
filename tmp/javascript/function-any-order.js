// // order 1
// function main() {
//   const test = () => {
//     console.log('test');
//   };

//   test();
//   bark();

//   const bark = () => {
//     console.log('bark');
//   }
// }

// order 2
function main() {
  test()
  bark()
}

const test = () => {
  console.log('test')
}

const bark = () => {
  console.log('bark')
}

main()
