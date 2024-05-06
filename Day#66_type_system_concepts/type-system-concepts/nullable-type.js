"use strict";
/******************
 * NULLABLE TYPES *
 ******************/
let username = "Glitcher";
let ageEx = null;
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
