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

movements.forEach( function( movement, index, arr )  { // movement means current element // 2nd element index // 3rd element enter array
    if( movement > 0 ) {
        console.log(`movement ${ index + 1 } you deposited ${movement} `);
    } else {
        console.log(`movement ${ index + 1 } you withdrew ${Math.abs( movement) } `);
    }
});


// array map

const currencies = new Map([
    ['USD',"United States dollar"],
    ['EUR',"Euro"],
    ['GBP',"Pound sterling"],
]);

currencies.forEach( function( value, key, map ) {
    console.log(`${key}: ${value}`);
});

// set

const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);

console.log( currenciesUnique);

currenciesUnique.forEach( function( value, _, map ) {
    console.log(`${value}: ${value}`);
});