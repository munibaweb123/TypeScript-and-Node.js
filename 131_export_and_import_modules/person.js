"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// In file: Person.ts
class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is:${this.name} `);
    }
}
exports.person = person;
//export the person class
