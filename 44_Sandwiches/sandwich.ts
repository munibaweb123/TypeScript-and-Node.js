// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

let sandwich2=['turkey', 'apple slices', 'honey mustard']
let sandwich3=['shami kabab','cucumber','tomatoes','chilli sauce','lettuce','mayo','ketchup']
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

    

make_sandwich('roast beef', 'cheddar cheese', 'lettuce', 'honey dijon');
make_sandwich('turkey', 'apple slices', 'honey mustard')
make_sandwich('shami kabab','cucumber','tomatoes','chilli sauce','lettuce','mayo','ketchup');
