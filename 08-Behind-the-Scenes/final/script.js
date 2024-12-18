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