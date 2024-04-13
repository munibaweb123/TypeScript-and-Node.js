"use strict";
/**Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function. */
const myObject = {
    property: "value",
    outerFunction: function () {
        console.log(this.property);
        const innerFunction = () => {
            console.log(this.property);
        };
        innerFunction();
    },
};
myObject.outerFunction();
