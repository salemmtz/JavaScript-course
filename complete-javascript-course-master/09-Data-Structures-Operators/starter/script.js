'use strict';

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is yout delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
