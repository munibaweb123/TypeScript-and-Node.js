"use strict";
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
//Describing triangle using our shape type
let triangle = {
    kind: "triangle",
    angle: 90,
    width: 15,
    height: 10
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
console.log(triangle); // here's the triangle
// We made a flexible program that can describe different shapes in detail.
