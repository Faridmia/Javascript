// map 

// map returns a new array containing  the result of applaying on operation on all original array elements

// filter: filter returns a new array containing the array elements that passed a specific test condtion

// reduce bolis ("reduces") all array elements down to one single value ( e.g adding all elements together)

// map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map( function( mov ) {
    return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementUSDfor = [];

for( const mov of movements ) {
    movementUSDfor.push( mov * eurToUsd );
}

console.log( movementUSDfor );

// example with arrow function

const movementsUSD2 = movements.map(  mov => mov * eurToUsd );

console.log( movementsUSD2 );