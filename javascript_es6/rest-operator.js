function myFunc(...params) {
    console.log(params);
}

// function myFunc() {
//     console.log(arguments);
// }

function myFunc(a,...params) {
    console.log(a);
    console.log(params);
}

myFunc( 1,2,3,4,5,6,7,8 );