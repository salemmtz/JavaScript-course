// ////// Importing modules //////

// ///////// When exporting & importing  orginal names and fucntions one by one
// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');

// // addToCart('bread', 5);
// // console.log(price, tq);

// ///////// Importing everything
// // import * as ShoppingCart from './shoppingCart.js';

// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

// ///////// When default export, we have to asign a name
// // import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // console.log(price, tq);
// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// // console.log('start fetching');
// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); /// Top level await
// // const data = await res.json(); /// top level await
// // console.log(data);
// // console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost(); /// top level await
// console.log(lastPost);

////////////////////////////// The module pattern ////////////////////////////////////

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

////////////////////////////// Common JS modules ////////////////////////
// // Export
// export.addTocart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(`${quantity} ${product} added to cart`);
//     };

// // Import
// const {addTocart} = require('./shoppingCart.js')
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: '5' },
    { product: 'pizza', quantity: '5' },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);
