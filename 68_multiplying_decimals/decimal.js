"use strict";
/**Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable. */
function multiplyingDecimal(num1, num2) {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100; // by multiplying and dividing by two decimal number i.e:100
}
console.log(multiplyingDecimal(5.6979, 7.6768));
