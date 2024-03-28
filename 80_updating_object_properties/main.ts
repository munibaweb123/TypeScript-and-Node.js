/**Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed. */

// Starting with our car object
let car ={
    make: "honda",
    model: "civics",
    year: "2022"
}
// Adding a new property 'color' and updating 'year'
car.color="white";
car.year="2021";
// showing the updated car objects
console.log(car);// Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.