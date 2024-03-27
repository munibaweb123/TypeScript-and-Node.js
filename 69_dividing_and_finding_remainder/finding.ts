/**Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together. */
function divideAndRemainder(divident:number,divisor:number):{quotient:number,remainder:number}{
    // Calculates the quotient and remainder
let quotient=Math.floor(divident/divisor);
 // Returns both in an object
let remainder=divident%divisor;
return {quotient,remainder}

}
//trying it by 41 divided by 4
console.log(divideAndRemainder(41,4)) //// Shows { quotient: 10, remainder: 1 }
// It shows how many times 10 goes into 41, and what's left over.