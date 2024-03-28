/**Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation. */

let car = {
    make:"Toyota",
    model:"corola",
    year:"2022"
};
let motorbyke = {
    make: "honda",
    model: "CBR 1000 RR",
    year: "2004"
}
console.log(car.make,car.model,car.year);// calling car with specific details
console.log(motorbyke.make,motorbyke.model,motorbyke.year);// calling motorbyke with its details