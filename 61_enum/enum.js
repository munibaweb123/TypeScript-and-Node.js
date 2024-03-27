"use strict";
/*Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.*/
// Making a list (enum) for different types of vehicles
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["bus"] = 0] = "bus";
    vehicleType[vehicleType["car"] = 1] = "car";
    vehicleType[vehicleType["motorcycle"] = 2] = "motorcycle";
    vehicleType[vehicleType["truck"] = 3] = "truck";
    vehicleType[vehicleType["highroof"] = 4] = "highroof";
    vehicleType[vehicleType["cycle"] = 5] = "cycle";
    vehicleType[vehicleType["rakshaw"] = 6] = "rakshaw";
})(vehicleType || (vehicleType = {}));
// Showing one type of vehicle from the list
console.log(vehicleType.bus); // It shows 0 because enums start counting from 0
console.log(vehicleType.rakshaw); // It shows 6 because enums start counting from 0
// Here, we're just checking what number the Car and rakshaw category got in our list.
