'use strict';


///////////////////////////////////////
// Default Parameters

// const bookings = [];

// const createBooking = function( flightNum, numPassengers = 1, price = 199 * numPassengers ) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//       flightNum,
//       numPassengers,
//       price
//     }

//     console.table(booking);

//     bookings.push(booking);
// };

// createBooking('LH123');
// // debugger; if you are want your code stop here then use debugger;
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// https://blog.stackademic.com/7-javascript-debugging-techniques-every-developer-should-master-fb2c2121bc8d


// function outerFunction(outerVar) {
//   let data = 'faridmia';
//   return function innerFunction(innerVar) {
//     debugger;
//       console.log(`Outer Variable: ${outerVar}, Inner Variable: ${innerVar}`);
//   };
// }

// const closureFunc = outerFunction("Outside");
// closureFunc("Inside");

function firstFunction() {
  secondFunction();
}

function secondFunction() {
  thirdFunction();
}

function thirdFunction() {
  
  //debugger; 
  console.log("Inside third function");
}


firstFunction();



// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;


const flight = 'LH234';

const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
};


const checkIn = function( flightNum, passenger ) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
}

const newPassport = function(person) {
  person.passport = Math.trunc( Math.random() * 100000000000);
};

newPassport(jonas);

checkIn(flight, jonas);
