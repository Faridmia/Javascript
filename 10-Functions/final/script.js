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

// function firstFunction() {
//   secondFunction();
// }

// function secondFunction() {
//   thirdFunction();
// }

// function thirdFunction() {
  
//   //debugger; 
//   console.log("Inside third function");
// }


// firstFunction();



// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;


// const flight = 'LH234';

// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284,
// };


// const checkIn = function( flightNum, passenger ) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     //alert('Checked in');
//   } else {
//     //alert('Wrong passport!');
//   }
// }

// const newPassport = function(person) {
//   person.passport = Math.trunc( Math.random() * 100000000000);
// };

// newPassport(jonas);

// checkIn(flight, jonas);

// Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function( str ) {
//     const [first, ...others ] = str.split(' ');

//     return [ first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('bangladesh is a small country!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);


// Functions Returning Functions

// const greet = function( greeting ) {
//     return function( name ) {
//       console.log( `${greeting} ${name}` );
//     }
// }

// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// // Challenge

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// book(23, 'Sarah Williams');

// // Call method
//  book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa,239,'Mary Cooper');

// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call( swiss, ...flightData );


// // The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');


// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// invoked function
( function() {
  console.log('This will never run again');
  const isPrivate = 23;
})();


( () => console.log('This will never run again two'))();