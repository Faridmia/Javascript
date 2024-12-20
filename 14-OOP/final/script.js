'use strict';


///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// jonas.calcAge(); // 46 (2037 - 1991)
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas.__proto__); // Person.prototype
// console.log(jonas.__proto__.__proto__); // Object.prototype
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.log(jonas instanceof Person);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));


// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };


// Person.hey();


// // .prototyeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));


// Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);


const Car = function ( make, speed ) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
}

Car.prototype.break = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
}

const bmw = new Car("BMW", 120);

const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();

