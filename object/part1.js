const user = {
  name: "Farid",
  address: {
    city: "Dhaka"
  }
};

console.log( user.name );

console.log( user.address?.city );


let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

let age = 0;
let finalAge = age ?? 18;
console.log(finalAge); 

// Destructuring Assignment

const user2 = { name: "Farid", age: 25 };
const { name2, age2 } = user2;

console.log(name2); // "Farid"
console.log(age2);  // 25

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Spread Operator (...)

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

const user3 = { name: "Farid" };
const info = { age: 25 };
const newUser = { ...user3, ...info };
console.log(newUser); // { name: "Farid", age: 25 }


function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

console.log(addArrow(3, 5)); // 8



