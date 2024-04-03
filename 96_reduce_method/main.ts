/**Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. */

// This function calculates the sum of all numbers in an array
function calculateSum(nums:number[]):number{
    return nums.reduce((accumulator,current)=>accumulator+current,0);
}
// Example: Calculating the sum of an array of numbers
const arrOfnum:number[]=[1,2,4,8,16];
console.log(calculateSum(arrOfnum));// output: 31
// It adds up all the numbers in the array, resulting in a single sum value.