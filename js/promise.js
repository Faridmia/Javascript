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

// function myFunction(value) {
//     document.getElementById("demo").innerHTML = value;
// }

// setTimeout(function() {
//     myFunction("time funciton data call");

// },3000);

// const myPromise = new Promise(function( myResolve,myReject ) {
//     setTimeout(function () {
//         myResolve("promise function call");   
//     }, 3000 );
// });

// myPromise.then(
//     function( value ) {
//         document.getElementById("demo").innerHTML = value;
//     }
// );

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}


let myPromise = new Promise (function( myResolve,myReject ) {
    let req = new XMLHttpRequest();
    req.open("GET","my_car.html");

    req.onload = function() {
        if(req.status == 200) {
            myResolve(req.response);
        } else {
           myReject("file not found"); 
        }
    };
    req.send();
});

myPromise.then(
    function(value) {
        myDisplayer(value);
    },
    function(error) {
        myDisplayer(error);
    }

);