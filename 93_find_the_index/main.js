"use strict";
/**Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation. */
function replaceBananawithMango(fruits) {
    let indexOfbanana = fruits.indexOf("Banana");
    if (indexOfbanana !== -1)
        fruits[indexOfbanana] = "Mango";
}
let fruits = ["Apple", "Banana", "Cherry", "kiwi"];
replaceBananawithMango(fruits);
console.log(fruits);
