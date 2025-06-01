const { indexOf, includes } = require("lodash");

const data = [{ id: 1, name: "abul", address: "kochu khet" }, {}, {}, {}];
console.log(data[0]);
console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenovo laptop", price: 65000 },
    { id: 2, name: "macbook", price: 165000 },
  ],
};
console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "shoriful raj",
  address: {
    street: {
      second: "poribag er goli",
    },
    city: "Dhaka",
  },
};
console.log(user.address.street.second);

const user2 = { name: "Rahim", address: { city: "Dhaka" } };

console.log(user2?.address?.city);
console.log(user2?.profile?.name);

let a = 5;
let b = a++;
console.log(b);

const str1 = "Hello";
const str2 = "World";
const result = str1.concat(" ", str2);
console.log(result);

const result2 = "I".concat(" love", " JavaScript");
console.log(result2);

let checking = "JavaScript";

console.log(checking.toLowerCase().includes("script"));

const [firstChar] = "JavaScript";

const isCapital = firstChar === firstChar.toUpperCase();
console.log(isCapital);

const money = 25;
const rich = money + 25;
console.log(rich);

const title = "Welcome";
const body = "This is a dynamic template.";
const html = `<div>
   <h1>${title}</h1>
   <p>${body}</p>
  </div>`;
console.log(html);

const student = {
  name: "ananta",
  age: 23,
};
const getName = (person) => student.name;

console.log(getName());

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
};
const result3 = doMath(3, 5, 8);
console.log(result3);

const person = {
  name: "Ananta",
  greetRegular: function () {
    console.log("Hello, " + this.name);
  },
  greetArrow: () => {
    console.log("Hello, " + this.name);
  },
};

person.greetRegular();
person.greetArrow(); // wrong

// const getObject2 = () => {
//   key: "value";
// };
// console.log(getObject());
// Output: undefined; // right

const getObject2 = () => ({ key: "value" });
console.log(getObject2());
