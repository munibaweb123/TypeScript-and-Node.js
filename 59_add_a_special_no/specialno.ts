/*Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!*/

function makeAdder(valueToAdd:number):(No:number)=>number{
    return function(number:number):(number){
        return number+valueToAdd;
    };

}
let addFive=makeAdder(5);// add number five with number you give later on functiion call
console.log(addFive(10));//  5+10=15