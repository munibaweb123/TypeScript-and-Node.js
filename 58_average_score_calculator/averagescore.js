"use strict";
/*Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!*/
//This program calculates the average of all scores given
function averageScore(...scores) {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70, 80)); // Shows the average score
// We add up all the scores, then divide by how many there are.
console.log(averageScore(50, 70, 87, 49)); //try with different set of numbers
