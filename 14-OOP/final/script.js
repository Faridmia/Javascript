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



// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration


class PersonCl {

  constructor( fullName, birthYear ) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log( 2037 - this.birthYear );
  }

  get age() {
    return 2037 - this.birthYear;
  }

  greet() {
    console.log( `Hey ${this.fullName}`);
  }

  set fullName(name) {
    if(name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName; 
  }

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl("Farid Mia", 1997 );
console.log(jessica);
jessica.calcAge();
console.log( jessica.age );


console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// };

PersonCl.prototype.greet = function() {
  const firstName = this.fullName.split(' ')[0];
  console.log(`Hey ${firstName}`);
};

jessica.greet();

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey(); // static method only class thake e call kora jai but object thake call kora jai na


// getter and setter

const account = {
  owner: 'Jonas',
  movements: [200,300, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}

console.log( account.latest );

account.latest = 50;

console.log(account.movements);


// object create 

const PersonProto = {

  calcAge() {
    console.log( 2037 - this.birthYear );
  },

  init( firstName, birthYear ) {
      this.firstName = firstName;
      this.birthYear = birthYear;
  }
};


const steven = Object.create(PersonProto); // object thake sorasori prototype chain create korte use hoi
steven.init("steven",1997);
console.log(steven);

steven.name = "Steven";
steven.birthYear = '2002';


steven.calcAge();

console.log( steven.__proto__ === PersonProto ); // output true

const sarah = Object.create(PersonProto);

sarah.init("Sarah",1997);

console.log(sarah);

sarah.calcAge();