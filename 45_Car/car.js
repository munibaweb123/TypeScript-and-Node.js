"use strict";
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function make_car(carinfo) {
    return carinfo;
}
let new_car1 = make_car({ manufacturer: "subaru", model_name: "outback", color: "white", tow_package: true });
let new_car2 = make_car({ manufacturer: "honda", model_name: "accord" });
console.log("car #1 info: ", new_car1);
console.log("car #2 info: ", new_car2);
