// The “if” statement
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }

// The “else” clause
if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

//Several conditions: “else if”
if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }

  //Conditional operator ‘?’
  let accessAllowed;
let age = prompt('How old are you?', '');
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
let result = condition ? value1 : value2;
 accessAllowed = (age > 18) ? true : false;
 // the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
 accessAllowed = age > 18 ? true : false;

 //Multiple ‘?’
  age = prompt('age?', 18);

 message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
a=3;
b=1;

 result=(a+b<4)?'below':'over'// using ? and :


if (a + b < 4) { // using if-else
  result = 'Below';
} else {
  result = 'Over';
}
 alert(result)
let login='Director'
 let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
  alert(message)