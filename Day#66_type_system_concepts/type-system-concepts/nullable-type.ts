/******************
 * NULLABLE TYPES *
 ******************/

let username:string|null="Glitcher";
let ageEx:number|null=null;

function greetUser(username:string|null){
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null);     // Output: Hello, Guest!