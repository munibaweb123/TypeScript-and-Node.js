"use strict";
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
let laptopSet1Prices = [50000, 45000, 42500];
let laptopSet2Prices = [100000, 150000, 200000];
let combinedLaptopPrices = [...laptopSet1Prices, ...laptopSet2Prices].sort((a, b) => (a - b));
console.log(combinedLaptopPrices);
