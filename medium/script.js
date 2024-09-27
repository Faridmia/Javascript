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
  

// array from array off

const set = new Set([1, 2, 3]);

const arrayFromset = Array.from( set );

console.log(arrayFromset);

const arrOfNumbers = Array.of( 1,2,3);
console.log(arrOfNumbers);


// const arrFromSet = Array.from(set);
// console.log(arrFromSet); // [1, 2, 3]

// const arrOfNumbers = Array.of(1, 2, 3);
// console.log(arrOfNumbers); // [1, 2, 3]


const users4 = [
  { id: 1, name3: 'Jane' },
  { id: 2, name3: 'John' },
  ];

  
users4.forEach ( ( { id,name3 } ) => {
    console.log(`your roll number ${id} and your name is ${name3}`);
});

// optional callback function

// function promisify(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//     fn(...args, (err, result) => {
//       if (err) reject(err);
//         else resolve(result);
//       });
//     });
//   };
// }

// const readFile = promisify(require('fs').readFile);
//   readFile('path/to/file.txt', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

  
// fetchData('https://jsonplaceholder.typicode.com/posts');


fetch('https://jsonplaceholder.typicode.com/posts') 
  .then(response => response.json())  // প্রথম প্রমিজের সমাধান হলে JSON ফরম্যাটে ডেটা নেয়া
  .then(data => {
    console.log('Data:', data);  // প্রথম ডেটা প্রিন্ট করা
    return fetch('https://jsonplaceholder.typicode.com/comments');  // পরবর্তী API কল
  })
  .then(response => response.json())  // দ্বিতীয় প্রমিজের সমাধান হলে JSON ফরম্যাটে ডেটা নেয়া
  .then(moreData => {
    console.log('More Data:', moreData);  // দ্বিতীয় ডেটা প্রিন্ট করা
    return fetch('https://jsonplaceholder.typicode.com/albums');  // তৃতীয় API কল
  })
  .then(response => response.json())  // তৃতীয় প্রমিজের সমাধান হলে JSON ফরম্যাটে ডেটা নেয়া
  .then(evenMoreData => {
    console.log('Even More Data:', evenMoreData);  // তৃতীয় ডেটা প্রিন্ট করা
  })
  .catch(error => {
    console.error('Error:', error);  // কোনো ত্রুটি হলে তা কনসোলে দেখানো
  });
