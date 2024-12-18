'use strict';

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'bob'],
}

const jessicaCopy = Object.assign({}, jessica2 );

jessicaCopy.lastName = 'Farid';

jessicaCopy.family.push("Mary");
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2 );
console.log('After marriage:', jessicaCopy );


const jessicaDeepCopy = JSON.parse(JSON.stringify(jessica2));

jessicaDeepCopy.family.push("beer");

console.log('Before marriage:', jessica2 );
console.log('After marriage:', jessicaDeepCopy );



// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);



// arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);



// const addExpr = function( a, b ) {
//   console.log( arguments );
//   return a + b;
// };

// addExpr( 2, 5 );
// addExpr( 2, 5, 8, 12 );

// const addArrow = ( a, b ) => {
//   console.log( arguments );
//   return a + b;
// };

// addArrow(2, 5, 8);


// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();