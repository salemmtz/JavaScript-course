'use strict';

////////// Ehance object literals ///////////////

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//////////////////////////////////////////////////////

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /// ES6 Enhance objects literals
  // hours,

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is yout delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////////////////////
//////////////////// THEORY /////////////////////
////////////////////////////////////////////////

////////// Destructuring arrays //////////////////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// /// Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// /// Reveice 2 return values from function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// /// Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// /// default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

///////////// Destructuring objects //////////////////

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// /// Renaiming values
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// /// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// /// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close },
// } = openingHours;
// console.log(o, close);

// //
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

/////////////// The spread operator ///////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr); // 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //joint two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // Spread operators works in all iterables. Iterables: arrays, strings, maps, sets, NOT objects.

// const str = 'Salem';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// // Real world example
// const ingredients = [
//   // prompt("Let's make pasta! \nIngredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 2998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

////////////////// Rest pattern ////////////////////

// // SPREAD, because '...' are on RIGHT side of '='
// const arr = [1, 2, ...[3, 4]];

// // REST, because '...' are on LEFT side of '='
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// ///Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// /// Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(8, 2, 5, 3, 2, 1, 4);

// restaurant.orderPizza('mushrooms', 'onion', 'olives');

////////////// Short circuiting (&& and ||) //////////

// console.log('--- OR ---');
// // It can use ANY data type, return ANY data type, do short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('--- AND ---');

// console.log(0 && 'Salem');
// console.log(7 && 'Salem');
// console.log(true && 0);
// console.log(undefined && null);

// console.log('Hello' && 23 && null && 'Salem');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'Spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');

//////////// The nullish coalescing operator /////////

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

////////////// Logical assigment operators ///////////

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni Rossi',
// };

// //// OR assigment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests ||= 10;

// /// nullish assigment operator(null or undefined
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests ?? 10;

// /// AND assigment operator
// rest1.owner = rest1.owner && '<ANONYMIOUS>';
// rest2.owner &&= '<ANONYMIOUS>';

// console.log(rest1);
// console.log(rest2);

////////////////// Coding challenge #1 //////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
//   players.forEach(player => console.log(player));
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// printGoals('Davies', 'Muller');

// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');

// team2 < team1 && console.log('Team 2 is more likely to win');

///////////// Looping arrays: the for of loop ////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// console.log([...menu.entries()]);
// for (const [i, el] of menu.entries()) {
//   // console.log(`${item[0] + 1}: ${item[1]}`);
//   console.log(`${i + 1}: ${el}`);
// }

////////// Ehance object literals ///////////////

/// Check top code

///////////// Optional chaining (?,) ////////////////

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // With optional chaining'
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// /// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// /// Arrays
// // const users = [{ name: 'Salem', email: 'hello@salem.comn' }];
// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

/////////// Looping objects: objects keys,values and entries /////////

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// /// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// /// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// /// Entries object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

///////////////// Coding challenge #2 ////////////////

// // 1.
// for (const [number, player] of game.scored.entries())
//   console.log(`Goal ${number + 1}: ${player}`);

// // 2.
// let avrgOdd = 0;
// for (const value of Object.values(game.odds)) {
//   avrgOdd += value;
// }
// avrgOdd /= Object.values(game.odds).length;
// console.log(avrgOdd);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // 4.
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// for (const [player, goals] of Object.entries(scorers)) {
//   console.log(`${player}: ${goals}`);
// }

/////////////////////// Sets /////////////////////////

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Salem'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear(ordersSet);
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('Salem Martinez').size);

////////////////////// Maps //////////////////////////

/// Diference between OBJECT and MAPS --> in MAPS keys can be of any type

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organinc'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close D:');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear;

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

////////////////// Maps Iteration //////////////////

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// /// Convert object to map
// console.log(Object.entries(hours));
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// /// QuizApp
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer: '));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// /// Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////// Coding challene #3 //////////////////

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔃 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔃 Substitution'],
//   [64, '🟨 Yellow card'],
//   [69, '🟥 Red card'],
//   [70, '🔃 Substitution'],
//   [72, '🔃 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🟨 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on
// average, every ${time / gameEvents.size} minutes`);

// // 4.
// for (const [min, event] of gameEvents) {
//   const time =
//     min <= 45 ? '[FIRST HALF]' : min <= 90 ? '[SECOND HALF]' : '[EXTRA TIME]';
//   console.log(`${time} ${min}: ${event}`);
// }

///////////////////// Working with strings ///////////////

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('8737'[0]);

// console.log(airline.length);
// console.log('8737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seatss
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log("You've got the middle seat :(");
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3C');

// console.log(new String('Salem'));
// console.log(typeof new String('Salem'));

// console.log(typeof new String('Salem').slice(1));

////////////////// Working with strings Pt. 2 ////////////

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// /// Fix capitalization in name
// const passenger = 'sAlEM';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// /// Comparing email
// const email = 'hello@salem.com';
// const loginEmail = ' Hello@Salem.Com \n';

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// /// Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = `All passengers come to barding door 23. Boarding door 23!`;

// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); /// /door/ makes it a regular expression 'g' makes it global

// /// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// /// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

////////////////// Working with strings Pt. 3 ////////////

// /// Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Salem Martinez'.split(' '));

// const [firstName, lastName] = 'Salem Martinez'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica and smith david');
// capitalizeName('salem Martinez');

// /// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); // length should be 25, '+' will be added at the start
// console.log('Salem'.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + ''; // converted to string
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(6435862));
// console.log(maskCreditCard(643586436536432));
// console.log(maskCreditCard('64435675635862'));

// /// Repeat
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in  line ${'🛫'.repeat(n)}`);
// };

// planesInLine(5);

///////////////////// Coding challene #4 //////////////////

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

const result = () => {
  const text = document.querySelector('textarea').value;
  const words = text.toLowerCase().split('\n');

  for (const [i, word] of words.entries()) {
    const [first, second] = word.trim().split('_');
    const newStr = [first, second[0].toUpperCase() + second.slice(1)].join('');
    console.log(`${newStr.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
  }
};

button.addEventListener('click', result);
