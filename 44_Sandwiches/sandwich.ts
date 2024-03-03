// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
let sandwich1=['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon']
let sandwich2=['turkey', 'apple slices', 'honey mustard']
let sandwich3=['shami kabab','cucumber','tomatoes','chilli sauce','lettuce','mayo','ketchup']
function make_sandwiches(items:string[]){
    console.log("\nMake a sandwich with given items:")
    for(let i=0;i<items.length;i++){
console.log(i+1,"\t",items[i])

    }
    
for(let i=0;i<items.length;i++){
    console.log(i+1,"adding item \"",items[i],"\"to your sandwich")
}
console.log("\n\thurray!, your sandwich is ready.")
    return items;
}
make_sandwiches(sandwich1);
make_sandwiches(sandwich2);
make_sandwiches(sandwich3);