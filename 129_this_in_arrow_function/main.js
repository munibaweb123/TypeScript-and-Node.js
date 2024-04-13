"use strict";
/**Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function. */
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("traditional Function:" + this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
        console.log("Arrow Function:", this.value);
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
