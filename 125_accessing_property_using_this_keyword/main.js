"use strict";
/**Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data. */
const rectangle = {
    width: 10,
    height: 20,
    calculateArea: function () {
        return this.width * this.height;
    }
};
console.log(rectangle.calculateArea());
