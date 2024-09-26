const str = 'Hello, world!';

console.log(str.includes('world')); // true

console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('!')); // true


const user = { name: 'Jane', age: 25 };


function  great({ name,age } ) {
    return `My name is ${name} and ${age} years old`;
}

console.log(great(user));


const user2 = { name2: 'Jane' };
const { name2, age = 18 } = user2;
console.log(name2); // "Jane"
console.log(age); // 18

const target = { a: 1 };
const source = { b: 2 };
const merged = Object.assign(target, source);
console.log(merged); // { a: 1, b: 2 }

const users = [
    { id: 1, name: 'Jane' },
    { id: 2, name: 'John' },
    { id: 3, name: 'John' },
  ];
  const user3 = users.find(u => u.id === 1);
  console.log(user3); // { id: 1, name: 'Jane' }
  
  const index = users.findIndex(u => u.id === 3);
  console.log(index); // 0

  const numbers = [1, 2, 3, 4, 5];

  let eventsome = numbers.some( num => num % 2 === 0 );

  console.log(eventsome);

  let evenall = numbers.every( num => num % 2 === 0 );

  console.log(evenall);

  const nested = [1, [2, [3, [4]]]];
const flat = nested.flat(2);
console.log(flat); // [1, 2, 3, [4]]
const mapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(mapped); // [1, 2, 2, 4, 3, 6]
  
