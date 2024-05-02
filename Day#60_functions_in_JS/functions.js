//function declaration
function showMessage() {
    alert( 'Hello everyone!' );
  }
  showMessage(); // function call

  //Local variable
  function showMessage() {
    let message = "Hello, I'm learning JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm learning JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function

  //Outer variables
  //function can access outer/global variables

  let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

let userName2 = 'John';

function showMessage() {
  userName2 = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName2;
  alert(message);
}

alert( userName2 ); // John before the function call

showMessage();

alert( userName2 ); // Bob, the value was modified by the function

function showMessage(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
  
    alert( from + ": " + text );
  }

  showMessage("Muniba ","using vs code")