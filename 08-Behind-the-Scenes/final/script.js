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