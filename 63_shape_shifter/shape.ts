// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle" | "triangle";
    radius?: number; // Only for circles
    width?: number; // for rectangles and for triangle
    height?: number; //for rectangles and for triangle
    angle?: number; // Only for triangle
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

//Describing triangle using our shape type
let triangle: Shape ={
    kind: "triangle",
    angle: 90,
    width: 15,
    height: 10
}

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
console.log(triangle); // here's the triangle
// We made a flexible program that can describe different shapes in detail.