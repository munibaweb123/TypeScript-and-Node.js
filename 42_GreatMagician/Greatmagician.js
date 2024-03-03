"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let magician_name = ["Tom", "Jerry", "Harry potter"];
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        console.log("The Great " + names[i]);
    }
}
make_great(magician_name);
