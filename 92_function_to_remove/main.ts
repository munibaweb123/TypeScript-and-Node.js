/**Question 92: Write a function to remove the last element from an array and return the removed element.

Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item. */

// This function removes the last element from an array and returns it
function toRemoveLastElement<T>(arr:T[]):T|undefined{
    return arr.pop();// Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
 const fruits :string[]= ["Apple","Banana","Cherry"];
 console.log(toRemoveLastElement(fruits));// Output: 'Cherry'
 console.log(fruits);// Output: [ 'Apple', 'Banana' ]
