"use strict";
/***************
 * UNION TYPES *
 ***************/
let myvar;
myvar = "Hello"; //Valid Assignment
console.log(myvar);
myvar = 42;
console.log(myvar);
// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
