/////////////// Activating Strinct Mode //////////////////
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// // const interface = 'Audio';  //Strict mode reserve this words
// // const private = 543;

/////////////// FUNCTIONS ///////////////////))
// function logger() {
//     console.log('My name is Jonas');
// }

// // Calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/////////////////// Functions Declarations vs Expressions //////////////////////////
// // Function declaration
// function calcAge1(bithYear) {
//     return 2037 - bithYear;
// }

// const age1 = calcAge1(1997);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1997);

// console.log(age1, age2);

/////////////////////// ARROW FUNTIONS //////////////////////////
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1997, 'Salem'));

//////////////////////// Functions calling other functions ///////////////////
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

////////////////////// REVIEWING FUNCTIONS /////////////////
// const calcAge = function (bithYear) {
//     return 2037 - bithYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retire.`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

/////////////////////////// CODING CHALLENGE #1 //////////////////////////
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// // Test 1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log('No team wins');
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

// // Test 2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

///////////////////////// Introduction to arrays ////////////////
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);

// friends[2] = 'Jay';
// console.log(friends);

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// // Exercise
// function calcAge(bithYear) {
//     return 2037 - bithYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

////////////////////// BASIC ARRAYS OPERATIONS (METHODS) ///////////////
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); //last element
// console.log(friends.pop());
// console.log(friends);

// friends.shift(); //first
// console.log(friends);



// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

//////////////////////// Coding Challenge #2 //////////////////////

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

////////////////////// OBJECTS ///////////////////////
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// // dot vs bracket notation
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age , job and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age , job and friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman'
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]} `);

//////////////////////// OBJECTS METHODS /////////////////////
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
//     }

// };

// // console.log(jonas.calcAge(1991));
// // console.log(jonas['calcAge'](1991));

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());


////////////////////////// CODING CHALLENGE #3 //////////////////////
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s (${john.BMI})!`);
// } else if (john.BMI > mark.BMI) {
//     console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})!`);
// }

///////////////// ITERATIONS: FOR LOOP ///////////////////
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetitions ${rep}`);
// }

///////////////// LOOPPING ARRAYS, BREAKING AND CONTINUING //////////////////
// const jonas = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] != 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] == 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

/////////////// LOOPING BACKWARDS AND LOOPS IN LOOPS /////////////

// const jonas = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting wight repetition ${rep}`);
//     }
// }

////////////////// WHILE LOOP /////////////////////
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetitions ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetitions ${rep}`);
//     rep++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice != 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end....');
// }

///////////////// CODING CHALLENGE #4 /////////////////
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

for (let bill = 0; bill < bills.length; bill++) {
    tips.push(calcTip(bills[bill]));
    totals.push(bills[bill] + tips[bill]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage(totals));