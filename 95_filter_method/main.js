"use strict";
/**Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. */
function filterOfNumbers(num) {
    return num.filter(number => number > 10);
}
let filter = filterOfNumbers([1, 2, 5, 6, 10, 21, 14, 45, 11]);
let filter2 = [2, 4, 8, 10, 12, 14, 16, 6];
console.log(filter);
console.log(filterOfNumbers(filter2));
