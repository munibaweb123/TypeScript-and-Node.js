"use strict";
let personExOne;
personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
//with another method
// Define an object type with type annotations
let personExTwo = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
console.log(personExOne); // calling whole object of personExOne
console.log(personExTwo.name); // calling name-->Alice
