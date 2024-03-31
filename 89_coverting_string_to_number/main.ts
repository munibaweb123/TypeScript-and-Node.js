/**Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them. */

function stringToNumber(str:string):number{
    return parseFloat(str)
}
//function call
console.log(stringToNumber("5"))// giving 5 in a string it will become number 5
console.log(stringToNumber("6")+5)
console.log(stringToNumber("7.78"))// string to decimal number