/**Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found. */

// This function iterates through a string and logs each character until it finds a vowel
function findFirstVowel(str:string){
    const vowel="aeiouAEIOU";
    
    for(const char of str){
        if(vowel.includes(char)){
        console.log(`First vowel found: ${char}`);
    break;// Stops the loop at the first vowel found
        }
        console.log(char)
        // Logs each character until a vowel is encountered
    }

}
findFirstVowel("GIAIC");// Logs 'G', 'I', 'A', 'I','C', and then 'First vowel found: I
// Demonstrates iterating through a string and stopping at the first vowel.