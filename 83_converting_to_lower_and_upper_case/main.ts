/**Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings. */

// This function changes a string to uppercase and then to lowercase
function convertCase(str:string){
    let upperStr=str.toLocaleUpperCase(); // Converts to uppercase
    let lowerStr=str.toLowerCase(); // Converts to lowercase
    console.log(`In upper case: ${upperStr},\n In lower case: ${lowerStr}`)
}

convertCase("The Governor House Initiative for generative Artifitial Intelligence and metaverse");