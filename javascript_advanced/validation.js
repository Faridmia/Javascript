const { functionsIn } = require("lodash");

function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number ") {
    return "Please provide a number...";
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply(5, 7);
console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "First name should be a String";
  } else if (typeof second !== "string") {
    return "Second name should be a String";
  }
  const full = first + " " + second;
  return full;
}

const full = fullName("Rahan", 5);
console.log(full);

function getPrice(product) {
  const price = product.price;
  return price;
}

const price = getPrice({ name: "chulkani dandi", price: 35, color: "Blue" });
console.log(price);

function getPrice(product) {
  if (typeof product !== "object") {
    return "Please provide an object";
  }
  const price = product.price;
  return price;
}

const price2 = getPrice(35);
console.log(price2);

function getSecond(numbers) {
  if (Array.isArray(numbers) == false) {
    return "Please provide an array";
  }
  const second = numbers[1];
  return second;
}

const second = getSecond(45);
console.log(second);

function firstletter(name) {
  if (typeof name !== "string") {
    return "Please  provide a string input";
  }

  let firstl = name.trim().at(0);

  return firstl;
}

console.log(firstletter("farid"));

function firstLetter(name) {
  if (typeof name !== "string" || name.trim() === "") {
    return "Please provide a valid, non-empty string";
  }

  let firstL = name.trim().charAt(0);

  return firstL;
}

console.log(firstLetter("farid")); // f
console.log(firstLetter("  Tuhin")); // T
console.log(firstLetter("")); // Please provide a valid, non-empty string
console.log(firstLetter(123)); // Please provide a valid, non-empty string

const getLastElement = (arr) =>
  Array.isArray(arr) && arr.length > 0
    ? arr[arr.length - 1]
    : "Please provide a valid, non-empty array.";

let arr = [10, 20, 30, 40];

console.log(getLastElement(arr));

console.log(getLastElement([10, 20, 30, 40])); // 40
console.log(getLastElement(["a", "b", "c"])); // "c"
console.log(getLastElement([])); // Please provide a valid, non-empty array.
console.log(getLastElement("not an array"));
