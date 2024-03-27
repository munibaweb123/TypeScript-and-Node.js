/*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
*/
//original function to calculate area of rectangle
function calculateArea(width:number,height:number):number{
  let area=width*height;
  return area;
}
console.log(`The area of rectangle is: ${calculateArea(4,5)}`)

//refracting to arrow functiion
let calculateAreaArrow=(width:number,height:number):number => width*height;
console.log(`with arrow function: ${calculateAreaArrow(4,5)}`);
