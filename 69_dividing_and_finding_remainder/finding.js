"use strict";
/**Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together. */
function divideAndRemainder(divident, divisor) {
    let quotient = Math.floor(divident / divisor);
    let remainder = divident % divisor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(41, 4));
