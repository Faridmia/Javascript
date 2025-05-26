function second(a, b) {
  const total = a + b;
}
console.log(second());

function third(a, b, c, d) {
  console.log(a, b, c, d);
}
third(2, 5);

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
console.log(noNegative(2, -1));

const fifth = { id: 2, name: "ponchom", age: 40 };
console.log(fifth.salary);

const x = -4;
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

const x2 = "a";
if (x2) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

const y = "";
if (!y) {
  console.log("value of y is falsy");
}

console.log(!!"hello"); // true
console.log(!!42); // true
console.log(!!{}); // true
console.log(!![]); // true

console.log(!!"");
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.log({} == {});

const first = {};
const second2 = first;

console.log(first === second2);
