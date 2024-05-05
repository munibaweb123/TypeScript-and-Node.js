/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

// Optional Parameters:
function greetOptional(name:string,age?:number){
    if(age!==undefined){
        console.log(`Hello, ${name}!, you are ${age} years old.`)
    }
    else{
        console.log(`Hello, ${name}!`)
    }
}
greetOptional("Alice");
greetOptional("Tom",20);

//Default parameters
function greetDefault(name:string,age:number=25){
    console.log(`Hello, ${name}!, you are ${age} years old.`)
}
greetDefault("Shella");
greetDefault("Bob",30);

