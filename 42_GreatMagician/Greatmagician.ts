// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magician_name:string[]=["Tom","Jerry","Harry potter"];
function show_magicians(magician:string[]){
    magician.forEach(original=>{
        console.log(original);
    });
        
    
}

function make_great(names:string[]){
    for(let i=0;i<names.length;i++){
        names[i] = names[i] + " the Great";
    }
}
show_magicians(magician_name);// Modifies the original array
make_great(magician_name);// Shows modified names

