// Code structure

//Statements are delimited with a semicolon:
alert('Hello'); alert('World');

//Usually, a line-break is also treated as a delimiter, so that would also work:
alert('Hello')
alert('World')

//That’s called “automatic semicolon insertion”. Sometimes it doesn’t work, for instance:
alert("There will be an error after this message")

[1, 2].forEach(alert)//undefined

/*Most codestyle guides agree that we should put a semicolon after each statement.

Semicolons are not required after code blocks {...} and syntax constructs with them like loops:*/
function f() {
    // no semicolon needed after function declaration
  }
  
  for(;;) {
    // no semicolon needed after the loop
  }
  //Strict mode
  //To fully enable all features of modern JavaScript, we should start scripts with "use strict".

//Variables are dynamically typed. They can store any value:
let x = 5;
x = "John";
alert(x);

typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true

alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string

//Function Declaration: the function in the main code flow
function sum(a, b) {
    let result = a + b;
  
    return result;
  }
  
//Function Expression: the function in the context of an expression
let sum = function(a, b) {
    let result = a + b;
  
    return result;
  };

//Arrow functions:
// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;
