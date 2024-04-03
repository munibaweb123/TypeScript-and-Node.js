"use strict";
/**Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. */
function calculateSum(nums) {
    return nums.reduce((accumulator, current) => accumulator + current, 0);
}
const arrOfnum = [1, 2, 4, 8, 16];
console.log(calculateSum(arrOfnum));
