/**Question 115: Use a switch statement to log the days of the week based on a number (1-7).

Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week. */

let day=2;
switch (day){
case 1:
console.log(`The day is Monday!`);
break;
case 2:
console.log(`The day is Tuesday!`);
break;
case 3:
console.log(`The day is Wednesday!`);
break;
case 4:
console.log(`The day is Thursday!`);
break;
case 5:
console.log(`The day is Friday!`);
break;
case 6:
console.log(`The day is Saturday!`);
break;
case 7:
console.log(`The day is Sunday!`);
break;
default:
console.log(`you don't choose any number for the day of the week`)
}

console.log(day);// switch to case 2, that gives "The day is Tuesday!" as an output