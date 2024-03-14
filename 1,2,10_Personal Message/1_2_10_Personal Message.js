"use strict";
//Name: Muniba Ahmed , date:18-2-2024
// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
let personName = '';
personName = prompt('what is your name?') || '';
if (personName !== null && personName !== '') {
    alert("Hello " + personName + ", would you like to learn some Python today?");
}
else {
    alert('you have to fill your name!');
}
