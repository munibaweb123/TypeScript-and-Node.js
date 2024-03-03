"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name
let magician_name = ["Tom", "Jerry", "Harry potter"];
function show_magicians(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i] + " the great");
    }
}
console.log("\nMagician's name:\n");
show_magicians(magician_name);
console.log("\nThe Great Magicians:\n");
make_great(magician_name);
console.log("\nOriginal Magicians:\n");
show_magicians(magician_name);
