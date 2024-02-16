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

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }


// let myPromise = new Promise (function( myResolve,myReject ) {
//     let req = new XMLHttpRequest();
//     req.open("GET","my_car.html");

//     req.onload = function() {
//         if(req.status == 200) {
//             myResolve(req.response);
//         } else {
//            myReject("file not found"); 
//         }
//     };
//     req.send();
// });

// myPromise.then(
//     function(value) {
//         myDisplayer(value);
//     },
//     function(error) {
//         myDisplayer(error);
//     }

// );

var status = true;
console.log("task 1");

const promise = new Promise( function(resolve,reject ) {
    setTimeout( function() {
        if(status) {
            resolve("task 2");
        } else {
            reject("failed");
        }
    }, 2000);
});

promise.
    then(function(value) {
        console.log(value);
    })
    .catch(function(err) {
        console.log(err);
    })
console.log("task 3");


const paymentSuccess = true;

const marks = 70;

function enroll(callback) {
    console.log("course enrollment is in progress!");

    const promise = new Promise(function(resolve,reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            } else {
                reject("payment failed");
            }
        }, 2000);
    });

    return promise;
}


function progress(callback) {
    console.log("course on progress..");

    const promise = new Promise(function(resolve,reject) {
        setTimeout(function () {
            if (marks >= 80 ) {
                resolve();
            } else {
                reject("you could not get enough marks to get the certificate..");
            }
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log("preparing your certificate..");
    const promise = new Promise(function(resolve) {
        setTimeout(() => {
            resolve("Congrates! you get the certificate");
        }, 1000 );
    });

    return promise;
}

enroll().
    then(progress)
    .then(getCertificate)
    .then(function(value) {
        console.log(value)
    })
    .catch(function(err) {
        console.log(err);
    })

