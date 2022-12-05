'use strict';

///////// SCOPING //////////
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';
//       const str = `Oh, you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT';
//     }
//     // console.log(str);//str es block scope and cannot be fined outside the scope
//     console.log(millenial);
//     // add(2, 3); //In strict mode, functions are block scope
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

////////////// HOISTING AND TDZ //////////////////
// Variables
// console.log(me);
// // console.log(job); // Temporal Dead Zone (TDZ) cannot use let
// // console.log(year); // and const variables befonre initialization

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// // console.log(addExp(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// // When declared as var, the function will be hoisted but will be undefined
// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// // It is preferable to use const to declare varaibles
// // TRY NOT TO use var
// // declare all functions before using them

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

////////////////// THIS KEYWORD /////////////////
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

// // Method borrow
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

//////////// REGULAR FUNCTIONS VS ARROW FUNCTIONS //////////////////
// // var variables atach their variables to the window object
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     //Solution 1 for this keyword being undefined inside
//     //regular functions
//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //Solution 2 for this keyword being undefined inside
//     //regular functions
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   // Arrow function does not have their own this keyword
//   // the this key word is referred to the parent scope
//   // in this case the window object
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5);
// addExp(2, 5, 8, 12);

// //Arguments keyword does not exist in arrow function
// // var addArrow = (a, b) => {
// //   console.log(arguments);
// //   return a + b;
// // };
// // addArrow(2, 5, 8);
