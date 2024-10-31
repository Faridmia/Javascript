// map 

// map returns a new array containing  the result of applaying on operation on all original array elements

// filter: filter returns a new array containing the array elements that passed a specific test condtion

// reduce bolis ("reduces") all array elements down to one single value ( e.g adding all elements together)

// map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// accumulator

const balance = movements.reduce( function( acc, cur, i, arr ) {  
    
    console.log(`iteration ${i}: ${acc} `);

    return acc + cur;

}, 0 ); 

console.log( balance );