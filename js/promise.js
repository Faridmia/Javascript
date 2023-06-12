// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }


// let myPromise = new Promise( function ( myResolve, myReject  ) {
//     let x = 0;

//     if( x == 0 ) {
//         myResolve("ok");
//     } else {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function(value) { myDisplayer(value);},
//     function(error) { myDisplayer(error);},
// );

function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}

setTimeout(function() {
    myFunction("time funciton data call");

},3000);
