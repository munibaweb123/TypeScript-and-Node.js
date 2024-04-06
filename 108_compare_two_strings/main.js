"use strict";
/**Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing. */
function compareStrings(str1, str2) {
    return (str1.toUpperCase() === str2.toUpperCase());
}
console.log(compareStrings("course", "Course"));
console.log(compareStrings("EFFECT", "AFFECT"));
