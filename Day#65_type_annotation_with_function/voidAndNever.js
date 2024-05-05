"use strict";
/****************
 * VOID & NEVER *
 ****************/
// void
function greet(name) {
    console.log(`Hello, ${name}!`);
}
function noReturnValue() {
    // This function doesn't return a value (implicitly returns undefined).
}
// never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
console.log(greet("Muniba"));
console.log(noReturnValue());
//console.log(throwError("Hy")); //error
//console.log(infiniteLoop()); //never exits
