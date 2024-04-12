/**Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet. */

let i=10;// initialize i with 10
while(i>=0){//check weather i is greater than or equal to zero
    if(i===5){// check if i is equal to 5
        break;// break the loop
    }
    console.log(i);// print i
    i--;//decreament in i
}
// Logs the countdown from 10 but stops abruptly when it hits 5.