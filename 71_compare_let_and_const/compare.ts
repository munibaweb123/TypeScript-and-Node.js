/**Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable. */
// Using `let` for a variable that can be reassigned
let age=50;
// Works fine because `let` allows reassignment

age=89;
const name="Alice";// cont doesn't allow reassignment
console.log(`age is: ${age}`)

try {
    name = "Bob"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}