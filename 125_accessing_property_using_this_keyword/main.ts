/**Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data. */

// An object with multiple properties and a method that interacts with them using 'this'
const rectangle={
    width:10,
    height:20,
    calculateArea:function(){
        return this.width*this.height;// 'this' accesses 'height' and 'width' properties of the object
    }
};
console.log(rectangle.calculateArea());// Outputs: 200
// The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.