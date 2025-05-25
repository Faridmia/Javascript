function difference(num1, num2) {
  const diff = num1 - num2;
  console.log(num1, num2, "difference is", diff);
}

const fatherAge = 40;
const myAge = 10;

difference(fatherAge, myAge);

function addNumbers(a, b) {
  console.log(arguments);
  return a + b;
}
const result = addNumbers(5, 8, 9, 6);
console.log(result);

function addNumbers2(a, b) {
  let sum = 0;

  for (const num of arguments) {
    sum = sum + num;
  }

  console.log(sum);

  return sum;
}

const result2 = addNumbers2(5, 8, 9, 6);
console.log(result2);

// function kodu(value) {
//   let lawprice = 35;
//   let totalLaw = Math.floor(value / lawprice);

//   return totalLaw;
// }

const kodu = (value) => Math.floor(value / 35);

let output = kodu(75);

console.log(output);

function tenTimes(number) {
  const result = number * 10;
  return result;
}

const output2 = tenTimes(5);
console.log(output2);
