// function greeting(greatingHandler) {
//   return greatingHandler();
// }

const { functionsIn } = require("lodash");

// function morningGreet() {
//   console.log("Good Morning");
// }

// greeting(morningGreet);

function greeting(greatingHandler) {
  greatingHandler();
}

function morningGreet() {
  console.log("Good Morning");
}

greeting(morningGreet);

function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

function printResult(value) {
  console.log("Result is:", value);
}

calculate(5, 10, printResult);

let numbers = [1, 2, 3, 4, 5];

let result = numbers.map((num) => num * 2);

console.log(result);

let result2 = numbers.map(function (num) {
  return num * 2;
});

console.log(result2);
