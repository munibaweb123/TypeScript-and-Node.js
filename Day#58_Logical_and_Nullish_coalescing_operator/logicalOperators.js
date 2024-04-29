// Logical Or ||:
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
}
let hour = 9;
if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
//In logical or operator '||' if any one value is true the result is true
//result = value1 || value2 || value3;
alert( 1 || 0 ); // 1 (1 is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

true || alert("not printed");//In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
false || alert("printed");

// And operator &&:
//AND returns true if both operands are truthy and false otherwise:
//result = a && b;

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
hour=12;
let munutes=30;
if(hour==12 && munutes==30){
    alert(`The time is 12:30`);
}
 // if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
//AND “&&” finds the first falsy value
//Given multiple AND’ed values:
//result = value1 && value2 && value3;
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one

//Don’t replace if with || or &&
let x = 1;
(x > 0) && alert( 'Greater than zero!' );
if (x > 0) alert( 'Greater than zero!' );// same as above but use if when we need if and AND '&&' when need '&&'

//Logical Not !:
alert( !true ); // false
alert( !0 ); // true
//A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non-empty string" ); // true
alert( !!null ); // false
//same thing using boolean
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false