/**************
 * TYPE ALIAS *
 **************/

type MyString = string; //defining your own type using string

let myName: MyString = "Glitcher";

type MyStringOrNumber = string | number; //defining your own type with union literal

let myValue: MyStringOrNumber = 10;

// another example defining type like an object type
type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alice: Employee = { //using Employee type for variable alice
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const bob: Employee = { //using Employee type for variable bob
  name: "Bob",
  age: 25,
};

console.log(alice);
console.log(bob);