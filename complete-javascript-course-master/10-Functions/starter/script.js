'use strict';

/////////////////////////// DEFAULT //////////////////////////////
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  /// ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 1, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
//leave default num passengers and define the price manueally
createBooking('LH123', undefined, 1000);

//////////////////////// VALUE VS REFERENCE ///////////////////////////

// const flight = 'LH234';
// const salem = {
//   name: 'Salem Martinez',
//   passport: 23456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 23456789) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport! ');
//   }
// };

// // checkIn(flight, salem);
// // console.log(flight);
// // console.log(salem);

// /// is the same as ...
// // const flightNum = flight;
// // const passenger = salem;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(salem);
// checkIn(flight, salem);

//////////////////////// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS /////////

// const oneWolrd = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// /// Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`tranformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWolrd);

// // JS uses callback funtions all the time
// const high5 = function () {
//   console.log('👋🏼');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////// FUNCTIONS RETURNING FUNCTIONS /////////////////////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// // Works because of closures
// greeterHey('Salem');
// greeterHey('Steven');

// greet('Hello')('Salem');

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hi')('Salem');

//////////////////////// THE CALL AND APPLY METHODS //////////////////

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Salem Martinez');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// /// copying book method from lufthansa object into book function
// const book = lufthansa.book;

// // book now is a regular function, therefore this tkeyword points to undefined
// // book(23, 'Sarah Williams');

// /// Call method help us point this keword to any obeject we want
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method is similar to call method. Apply method receives an array of arguments instead of a list of arguments
// const flightData = [583, 'Geoger Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// // A more modern way to do it
// book.call(swiss, ...flightData);

// /// THE BIND METHOD ///
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Salem Martinez');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial aplication
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));

// // Challenge
// const addTax2 = rate => value => console.log(value + value * rate);
// addTax2(0.23)(100);

// const addTax3 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat3 = addTax3(0.23);
// console.log(addVat3(100));

//////////////////////////////// CODING CHALLENGE #1 ///////////////////

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0,0,0,0]
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // Get the input answer
//     const input = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     //Register the answer
//     typeof input === 'number' &&
//       input < this.answers.length &&
//       this.answers[input]++;
//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const testData1 = [5, 2, 3];
// const testData2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: testData1 });
// poll.displayResults.call({ answers: testData1 }, 'string');

// poll.displayResults.call({ answers: testData2 });
// poll.displayResults.call({ answers: testData2 }, 'string');

/////////////////// INMEDIATELY INVOKED FUNCTION EXPRESSIONS //////////
// const runOnce = function () {
//   console.log('This will never run again?');
// };
// runOnce();

// // inmediately invoke function expression IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will also never run again'))();

///////////////////////////////// CLOSURES /////////////////////////////

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

/// Example 1 ///
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// // Reasigning f function
// h();
// f();
// console.dir(f);

// /// Example 2 ///
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

///////////////////////// CODING CHALLENGE #2 //////////////////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
