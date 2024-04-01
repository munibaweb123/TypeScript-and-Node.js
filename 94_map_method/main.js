"use strict";
/**Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items. */
const words = ["Hello", "World", "Typescript", "Javascript"];
const lengths = words.map(words => words.length);
console.log(lengths);
