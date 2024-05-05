/****************
 * VOID & NEVER *
 ****************/

// void
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined).
  }
  
  // never
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {
      // This function never exits (infinite loop).
    }
  }

  console.log(greet("Muniba"));
  console.log(noReturnValue());
  //console.log(throwError("Hy")); //error
  //console.log(infiniteLoop()); //never exits