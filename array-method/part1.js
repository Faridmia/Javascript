let arr = ['a','b','c','d','e'];

// slice

console.log(arr.slice(2));  // c, d, e
console.log(arr.slice( 2,4 )); // // c, d
console.log(arr.slice( -2 )); // d, e
console.log(arr.slice( -1 )); // e
console.log(arr.slice( 1, -2 )); // b, c
console.log(arr.slice()); // array ful copy hobe
console.log(arr.slice( [...arr] )); // array ful copy hobe


// splice method
let arr2 = ['a','b','c','d','e'];
arr2.splice(-1); 
console.log(arr2); // ['a','b','c','d']

arr2.splice( 1, 2 ); 

console.log( arr2 ); // ['a','d','e']; 


// reverse array

let arr3 = ['a','b','c','d','e'];

let arr4 = ['j','i','h', 'g','f']; 

console.log( "reverse " + arr4.reverse() );
console.log( arr4 );


// array concat

const letters = arr3.concat(arr4);

console.log( letters );
console.log( ...arr3,...arr4 );

// join

console.log( letters.join(' - ') );

// array at method

const arrAt = [ 23,11, 64 ];

console.log( arrAt[0] );
console.log( arrAt.at(0) );

// getting last array elements

console.log( arrAt[arrAt.length - 1] );
console.log( arrAt.slice(-1)[0] );

console.log(arrAt.at( -1 ) );

console.log('jonas'.at(0));

