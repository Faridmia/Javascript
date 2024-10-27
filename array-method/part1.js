let arr = ['a','b','c','d','e'];

// slice

console.log(arr.slice(2));  // c, d, e
console.log(arr.slice( 2,4 )); // // c, d
console.log(arr.slice( -2 )); // d, e
console.log(arr.slice( -1 )); // e
console.log(arr.slice( 1, -2 )); // b, c
console.log(arr.slice()); // array ful copy hobe
console.log(arr.slice( [...arr] )); // array ful copy hobe