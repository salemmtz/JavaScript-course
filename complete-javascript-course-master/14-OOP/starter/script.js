'use strict';

///////////////////// Constructor functions and the new operator ////////////

// /// Constructor function
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   /// Never create a method inside a constructor function
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const salem = new Person('Salem', 1998);
// console.log(salem);

// /// 1. New object is created
// /// 2. Function is called, this = object
// /// 3. object linked to prototype
// /// 4. function automatically return object

// const matilda = new Person('matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(salem instanceof Person);

///////////////////// Prototypes /////////////////////

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// salem.calcAge();
// matilda.calcAge();

// console.log(salem.__proto__); /// protype of salem object
// console.log(salem.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(salem));

// Person.prototype.species = 'Homo Sapiens';
// console.log(salem.species, matilda.species);

// console.log(salem.hasOwnProperty('firstName'));
// console.log(salem.hasOwnProperty('species'));

////////////////// Prototypal inheritance //////////////////

// console.log(Object.prototype); /// top of prototype chain
// console.log(salem.__proto__.__proto__);

// console.dir(Person.prototype.constructor); /// dir to inspect

// const arr = [2, 3, 5, 6, 7, 9, 7, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); /// prototype of the constructor (Array) is gonna be the prototype of all  objects created by these constructor

// Array.prototype.unique = function () {
//   return [...new Set(this)]; /// returns array with unique values
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////// Coding Challenge #1 //////////////////

// const Car = function (maker, speed) {
//   this.maker = maker;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.maker} car is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.maker} car is going at ${this.speed}`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.brake();
// car1.accelerate();

// car2.brake();
// car2.accelerate();
// car2.accelerate();
// car2.brake();

//////////////////////// ES6 classes ////////////////////////

// /// class expression
// // const PersonCl = class{}

// /// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   /// Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// /// 1. Classes are NOT hoisted --> it cannot be used before declaration
// /// 2. Classes are first-class citizes
// /// 3. Classes are executed in strict mode

///////////////////// Getters and setters /////////////////////

// const account = {
//   owner: 'Salem',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   /// Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// console.log(jessica.age);

////////////////// Static methods /////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log('Hey there');
//   console.log(this);
// };

// Person.hey();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   /// Static method
//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }
// }

// PersonCl.hey();

////////////////// Object.create //////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

///////////////////// Coding Challenge #2 //////////////////

// class CarCl {
//   constructor(maker, speed) {
//     this.maker = maker;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.maker} car is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.maker} car is going at ${this.speed} k/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);

// /// calling the getter method
// console.log(ford.speedUS);

// ford.accelerate();
// ford.accelerate();
// ford.brake();

// /// using a setter method
// ford.speedUS = 50;

// console.log(ford);

//////////////////////// Inheritance between classes ////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// /// Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

/////////////////////////// Coding Challenge #3 ////////////////////////

// const Car = function (maker, speed) {
//   this.maker = maker;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.maker} car is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.maker} car is going at ${this.speed}`);
// };

// const EV = function (maker, speed, charge) {
//   Car.call(this, maker, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge *= 0.99;
//   console.log(
//     `${this.maker} going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const car1 = new EV('Tesla', 120, 23);
// console.log(car1);

// car1.chargeBattery(100);

// car1.brake();
// car1.accelerate();

////////////////////////////// Inheritance between "Classes" ES6 Classes //////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   /// Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     /// needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more life ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

////////////////////////////// Inheritance between "Classes" Object.create //////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

////////////////////////////// Another class example //////////////////////////////

/// 1) Public fields
/// 2) Private fields
/// 3) Public methods
/// 4) Private methods

class Account {
  /// 1) Public fields (indstances)
  locale = navigator.language;

  /// 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    /// Protected property
    this.#pin = pin;
    // this._movements = [];

    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  /// Public interface of the objcet
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
