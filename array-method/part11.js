const owners = ['Jonas','Zach', 'Adam','Martha'];

console.log(owners.sort());

console.log(owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log( movements.sort());

// ascending
// const movemntsSort = movements.sort(( a, b ) => {
//     if( a > b ) return 1;
//     if( b > a ) return -1;
// });

const movemntsSort = movements.sort(( a, b ) => a - b);
console.log( movemntsSort );
// descending
// const movemntsdesc = movements.sort(( a, b ) => {
//     if( a > b ) return -1;
//     if( b > a ) return 1;
// });
const movemntsdesc = movements.sort(( a, b ) => b -a );
console.log( movemntsdesc );