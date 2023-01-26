'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${+(
                  data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
            </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

/// https://restcountries.com/v2/
//////////////////////////////////////////////////////////////////////////////

//////////////////////// Our first AJAX call //////////////////////////////

/// List of public APIs in github - https://github.com/public-apis/public-apis

// const getCountryData = function (country) {
//   /// old school of doing AJAX calls
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); /// this keyword points to the request
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${+(
//               data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//         </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');

// const getCountryAndNeighbour = function (country) {
//   /// AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); /// this keyword points to the request
//     console.log(data);

//     /// Render country
//     renderCountry(data);

//     /// Get neighbour country (2)
//     const neighbour = data.borders?.[0];
//     console.log(neighbour);

//     if (!neighbour) return;

//     /// AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

//////////////////////////////////// Promises and the fetch API //////////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) /// returns a promise but the data we need is still not available
//     .then(function (response) {
//       console.log(response);
//       return response.json(); /// returns a new promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/// more simplified way without console logs
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders?.[0];
//       const neighbour = 'sdfg';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       //   console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //   const neighbour = 'sdfg';

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('Mexico');
// });

////////////////////////////// Coding challenge #1 //////////////////////////////

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(resp => {
//       console.log(resp);
//       if (!resp.ok)
//         throw new Error(`Problem with Geocoding API ${resp.status}`);

//       return resp.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(resp => {
//       if (!resp.ok) throw new Error(`Country not found (${resp.status})`);

//       return resp.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥💥💥`))
//     .finally((countriesContainer.style.opacity = 1));
// };

// // Test coordinates
// whereAmI(51.508, 13.81);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

////////////////////////////// Event loop in practice ////////////////////////////////////

// console.log('test start'); /// 1. top level code will get executed first

// setTimeout(() => console.log('0 sec tiomer'), 0); /// 4. timer will go last, because is in the callback queue
// ///                                                 Time is not accurate, depends on the heaviness of the promise task

// Promise.resolve('Resolved promise 1').then(res => console.log(res)); /// 2. Promises will get executed after top level code
// ///                                                                     Microtask queue has priority over callback queue

// /// 3. This promise will get excetuded after first promise
// Promise.resolve('Rosolve promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end'); // top level code

////////////////////////////// Building a simple promise ////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happing 🔮');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money :('));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// /// Promisifyng setTimeout
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

///////////////////////////////// Promisifyn the geolocation ///////////////////////////

// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(console.log);

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then(resp => {
//       console.log(resp);
//       if (!resp.ok)
//         throw new Error(`Problem with Geocoding API ${resp.status}`);

//       return resp.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(resp => {
//       if (!resp.ok) throw new Error(`Country not found (${resp.status})`);

//       return resp.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥💥💥`))
//     .finally((countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', whereAmI);

////////////////////////////// Coding challenge #2 //////////////////////////////
const imgContainer = document.querySelector('.images');
let currentImg;

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');

//     return wait(2);
//   })
//   .then(() => {
//     console.log('2 seconds has passed');
//     currentImg.style.display = 'none';

//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');

//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/////////////////////////// Consuming promises with async/await /////////////////////
