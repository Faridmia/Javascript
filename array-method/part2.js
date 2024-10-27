const movements = [ 200,  450, -400, 3000, -650,-130, 70, 1300 ];

// for of method

for( const movement of movements ) {

    if( movement > 0 ) {
        console.log(`you deposited ${movement} `);
    } else {
        console.log(`you withdrew ${Math.abs( movement) } `);
    }
}

// for entities method

for( const [ i, movement ] of movements.entries() ) {

    if( movement > 0 ) {
        console.log(`movement ${ i + 1 } you deposited ${movement} `);
    } else {
        console.log(`movement ${ i + 1 } you withdrew ${Math.abs( movement) } `);
    }
}

console.log("==============foreach method ==============");

movements.forEach( function( movement )  {
    if( movement > 0 ) {
        console.log(`you deposited ${movement} `);
    } else {
        console.log(`you withdrew ${Math.abs( movement) } `);
    }
});

movements.forEach( function( movement, index, arr )  { // movement means current element // index 
    if( movement > 0 ) {
        console.log(`movement ${ index + 1 } you deposited ${movement} `);
    } else {
        console.log(`movement ${ index + 1 } you withdrew ${Math.abs( movement) } `);
    }
});