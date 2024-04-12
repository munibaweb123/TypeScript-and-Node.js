/**Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop. */

// This for loop counts from 1 to 10 but skips 5
for(let i=0;i<=10;i++){
    if(i===5){
     continue;// Skips the rest of the loop for i = 5
    }
    console.log(i);
    }
// It demonstrates how to use 'continue' to skip a specific iteration.