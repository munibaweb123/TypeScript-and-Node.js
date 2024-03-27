"use strict";
/**Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once. */
// This function sees if both inputs are true
function checkBothTrue(a, b) {
    // Only says true if both val1 and val2 are true
    return a && b;
}
console.log(checkBothTrue(true, true)); // It checks two things, since both are true, the answer is true.
console.log(checkBothTrue(true, false)); // It checks two things, but since one is false, the answer is false.
console.log(checkBothTrue(false, true)); // It checks two things, but since one is false, the answer is false.
console.log(checkBothTrue(false, false)); // It checks two things, but since one is false, the answer is false.
