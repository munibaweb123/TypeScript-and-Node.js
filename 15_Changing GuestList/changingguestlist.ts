// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

var guests=["Bisma ","Noor Pari ","Tabby "];
var dinnerMessage="Invitation for my Dinner Party:\nIt is our pleasure to invite you at our dinner party.\n thankyou! ";
for(var i=0;i<guests.length;i++){
    console.log("Dear Miss "+guests[i]+","+dinnerMessage)
}
var newGuest="Mahnoor ";
var absGuest=guests[0];
guests[0]=newGuest;
for(var i=0;i<guests.length;i++){
    console.log("\nDear Miss "+guests[i]+","+dinnerMessage)
}
console.log("\nMiss "+absGuest+" is not coming in party!")