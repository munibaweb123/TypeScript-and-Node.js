/**Question 127: Convert a traditional function expression to an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods. */

// Traditional function expression
const traditionalFunction=function(a:number,b:number){
    return a+b;
};
// Converted to arrow function
const arrowFunction=(a:number,b:number)=>a+b;

console.log(traditionalFunction(12,5));//output:17

console.log(arrowFunction(10,12));//output:22
// Demonstrates the conversion of a traditional function expression to an arrow function.