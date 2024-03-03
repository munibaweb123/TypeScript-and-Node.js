"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
let message = "I love TypeScript.";
function make_shirt(size) {
    //console.log(message+size);
    return size;
}
console.log(message + make_shirt("large"));
console.log(message + make_shirt("medium"));
console.log("I am a programmer " + make_shirt("small"));
