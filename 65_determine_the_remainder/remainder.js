"use strict";
/**Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more. */
// This function finds the leftover of dividing two numbers
// function remainder(num1: number, num2: number): number {
//     // Gives back the leftover of num1 divided by num2
//     return num1 % num2;
// }
// // Trying it with 5 divided by 2
// console.log(remainder(5, 2)); // Shows 1
// This tells us the leftover, which is 1 here.
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(4, 3));
