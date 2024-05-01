//function expression 
let sayHi = function() {
    alert( "Welcome to function expression" );
  };

  let func = sayHi;    // (2) copy

func(); // Welcome to function expression    // (3) run the copy (it works)!
sayHi(); // Welcome to function expression    //     this still works too (why wouldn't it)