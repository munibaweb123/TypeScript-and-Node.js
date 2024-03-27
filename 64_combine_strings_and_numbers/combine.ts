/*Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.*/

// This function mixes a text and a number into one text
function CombineStringAndNumber(text:string,number:number):string{

    // Joins the text and number into a single text
    return text + number;
}

// Trying it out with "Age: " and 30
console.log(CombineStringAndNumber("Age: ",30));// Shows "Age: 30"
// Here, we put together the text and number.