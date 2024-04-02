/**Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. */

// This function filters an array, keeping only numbers greater than 10
function filterOfNumbers(num:number[]):number[]{
   return num.filter(number =>number>10);
   
   
}
// Example: Filtering an array of numbers
let filter=filterOfNumbers([1,2,5,6,10,21,14,45,11]);
let filter2:number[]=[2,4,8,10,12,14,16,6]
console.log(filter); //output: [ 21, 14, 45, 11 ]
console.log(filterOfNumbers(filter2));// output: [ 12, 14, 16 ]
// The new array contains only the numbers that are greater than 10.