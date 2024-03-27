/*Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.*/
let mixArray=[1,"apple",2,"course","carrot",true];

let strinsArray=mixArray.filter(item=>typeof item==="string");

console.log(mixArray);
console.log(strinsArray);