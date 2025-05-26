const { values } = require("lodash");

const actor = {
  name: "ananata",
  age: 30,
  phone: "0188232232",
  money: 123132313,
};

const { name, age: boyos, money, phone } = actor;
console.log(name);
console.log(boyos);

const book = { title: "1984", author: "George Orwell" };

const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);
console.log(bookAuthor);

function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);

const person = { name2: "Amit", age: 25 };
const { name2, phone2 = "n/a" } = person;

console.log(name2);
console.log(phone2);

function instoduce({ name3, age, profession }) {
  console.log(
    `My name is ${name3} and  age is ${age} and profession ${profession}`
  );
}

let users = { name3: "Faridmia", age: "30", profession: "WordPress developer" };

instoduce(users);

const numbers = [1, 2, 3, 4, 5];

const [, second, , fourth] = numbers;

console.log(second);
console.log(fourth);

const numbersset = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbersset);

let numArray = [...uniqueNumbers];
console.log(numArray);

const myApp = new Map();

myApp.set("myname", "farid mia");
myApp.set("address", "faridpur");

console.log(myApp);

console.log(myApp.get("myname"));

for (const [key, value] of myApp) {
  console.log(key, value);
}

myApp.forEach((value, key) => {
  console.log(` ${key} = ${value}`);
});

const object = Object.fromEntries(myApp);

console.log(object.myname);

// example 1

let example1 = new Set();

example1.add(10);
example1.add(20);
example1.add(10);
example1.add(30);

console.log(example1);
