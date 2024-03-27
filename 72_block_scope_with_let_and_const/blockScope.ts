/**Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block. */
{
    let blockLet="visible inside the block"
    const blockConst="also only inside the block"
    console.log(blockLet);
    console.log(blockConst);
}
try{
    console.log(blockLet);
}catch(error)
{
    console.log("const and let works inside the block!, \'blockLet\' is not accessible outside the block")
}
