/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthRectangle:number,widthRectangle:number){
    return lengthRectangle*widthRectangle;
}
// Calling the function with valid arguments
const lengthRectangle=5;
const widthRectangle=10;
const area=calculateRectangleArea(lengthRectangle,widthRectangle)
console.log(`The area of rectangle is ${area}`);//output: 50