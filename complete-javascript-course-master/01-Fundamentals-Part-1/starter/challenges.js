// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);

// const markHeigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI);
// console.log(markHeigherBMI);

//Challenge 2

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's! 
// Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// } else {
//     console.log(`John's BMI is higher than Mark's! 
// John's BMI (${markBMI}) is higher than Mark's (${johnBMI})!`)
// } 

// // Challenge 4

const bill = 275;
let tip = bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total bill is ${bill + tip} `);