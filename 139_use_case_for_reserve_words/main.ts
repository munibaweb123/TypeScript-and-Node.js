/**Question 139: List three reserved words in JavaScript and create a valid use case for each.

Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable. */

// Reserved word: let - used to declare a block-scoped local variable
let count =5;
// Reserved word: if - used to execute a block of code if a specified condition is true
if(count>0){
    console.log(`count is greater than 0 i.e: ${count}`)
}
// Reserved word: return - used to exit a function and return a value from that function
function add(a:number,b:number){
    return a+b;
}
console.log(`add count and 8 : ${add(count,8)}`);
// Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.