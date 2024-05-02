//function expression 
let sayHi = function() {
    alert( "Welcome to function expression" );
  };

  let func = sayHi;    // (2) copy

func(); // Welcome to function expression    // (3) run the copy (it works)!
sayHi(); // Welcome to function expression    //     this still works too (why wouldn't it)

function ask(question, yes, no) { // call back functions
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() { //if yes, showOk
    alert( "You agreed." );
  }
  
  function showCancel() { //if no, showCancel
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);