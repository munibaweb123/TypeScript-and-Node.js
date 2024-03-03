"use strict";
var guests = ["Bisma ", "Noor Pari ", "Tabby "];
var dinnerMessage = "Invitation for my Dinner Party:\nIt is our pleasure to invite you at our dinner party.\n thankyou! ";
// for(var i=0;i<guests.length;i++){
//     console.log("Dear Miss "+guests[i]+","+dinnerMessage);
// }
var newGuest = "Mahnoor ";
var absGuest = guests[0];
guests[0] = newGuest;
for (var i = 0; i < guests.length; i++) {
    console.log("\nDear Miss " + guests[i] + "," + dinnerMessage);
}
console.log("\nMiss " + absGuest + " is not coming in party!");
console.log("\n Good news! We find a big table so we are inviting 3 more guests");
guests.unshift("Misbah"); //add new element at the start of the array
guests.splice(2, 0, "Komal Rida"); //add element at 2nd position without deleting any element
guests.push("Sarah Khalid"); //append new element at the end of the array
for (var i = 0; i < guests.length; i++) {
    console.log("\nDear Miss " + guests[i] + "," + dinnerMessage);
}
console.log("\nSorry we cannot arrange big table, Only two peoples will be invited.");
while (guests.length > 2) {
    var removeGuest = guests.pop();
}
console.log("Sorry Miss " + removeGuest + " you are not invited for Dinner");
for (var i = 0; i < guests.length; i++) {
    console.log("\nDear Miss " + guests[i] + "," + "You are Still invited!\n thank you..\n\n");
}
console.log("\nthe number of people we are inviting to dinner are:" + guests.length);
guests.splice(0, 2); //remove 2 elements from index 0
console.log(guests);
console.log("\nthe number of people we are inviting to dinner are:" + guests.length);
