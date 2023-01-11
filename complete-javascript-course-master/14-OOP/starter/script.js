'use strict';

///////////////////// Constructor functions and the new operator ////////////

/// Constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  /// Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const salem = new Person('Salem', 1998);
console.log(salem);

/// 1. New object is created
/// 2. Function is called, this = object
/// 3. object linked to prototype
/// 4. function automatically return object

const matilda = new Person('matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(salem instanceof Person);

///////////////////// Prototypes /////////////////////

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

salem.calcAge();
matilda.calcAge();

console.log(salem.__proto__); /// protype of salem object
console.log(salem.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(salem));

Person.prototype.species = 'Homo Sapiens';
console.log(salem.species, matilda.species);

console.log(salem.hasOwnProperty('firstName'));
console.log(salem.hasOwnProperty('species'));
