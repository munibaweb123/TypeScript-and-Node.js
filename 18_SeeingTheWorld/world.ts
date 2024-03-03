//18. Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
var worldPlaces=["Mecca","Madinah","Maldives","Eiffel Tower","Turkey"];

console.log("\nI want to visit these places of the world:\n");
//Print your array in its original order.
// for(var i=0;i<worldPlaces.length;i++){
//     console.log(worldPlaces[i]);
// }
console.log("Original "+worldPlaces);
//Print your array in alphabetical order without modifying the actual list.
console.log("Copy "+[...worldPlaces].sort());
//Show that your array is still in its original order by printing it.
console.log("Original "+worldPlaces);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Copy "+[...worldPlaces].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("Original "+worldPlaces);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original "+worldPlaces.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original "+worldPlaces.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Original "+worldPlaces.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original "+worldPlaces.sort().reverse());