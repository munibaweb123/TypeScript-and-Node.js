/**Question 101: Generate a random integer between 1 and 10.

Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer. */

// Generates a random integer between 1 and 10
const randomInteger=Math.floor(Math.random()*10)+1;

console.log(randomInteger);// Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.