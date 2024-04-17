"use strict";
/**Question 139: List three reserved words in JavaScript and create a valid use case for each.

Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable. */
let count = 5;
if (count > 0) {
    console.log(`count is greater than 0 i.e: ${count}`);
}
function add(a, b) {
    return a + b;
}
console.log(`add count and 8 : ${add(count, 8)}`);
