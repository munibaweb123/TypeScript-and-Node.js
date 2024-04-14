"use strict";
/**Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure. */
Object.defineProperty(exports, "__esModule", { value: true });
// In another file:
const person_1 = require("./person");
const alice = new person_1.person("Alice");
alice.greet(); // Outputs: Hello, my name is Alice
// This snippet imports the Person class and uses it to create an instance.
