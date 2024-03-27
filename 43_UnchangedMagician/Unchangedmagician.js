"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name
let magician_name = ["Tom", "Jerry", "Harry potter"];
function show_magicians(magician) {
    magician.forEach(magicians => {
        console.log(magicians);
    });
}
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magician_name.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magician_name); // Shows original names
console.log("\nGreat magicians:");
show_magicians(greatMagicians); // Shows modified names
