// map 

// map returns a new array containing  the result of applaying on operation on all original array elements

// filter: filter returns a new array containing the array elements that passed a specific test condtion

// reduce bolis ("reduces") all array elements down to one single value ( e.g adding all elements together)

// map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const deposited = movements.filter( function( move ) {
    return move > 0;
});

console.log(movements);
console.log(deposited);

const depositsFor = [];
for( const mov of movements ) if( mov > 0 ) depositsFor.push( mov );

console.log( depositsFor );


const withdrawals = movements.filter( mov => mov < 0 );

console.log( withdrawals );
