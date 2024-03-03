"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let magician_name = ["Tom", "Jerry", "Harry potter"];
function show_magicians(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
        //return names[i];
    }
}
show_magicians(magician_name);
