// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guests=["Rabia ","Noor Pari ","Tabby "];
var dinnerMessage="Invitation for my Dinner Party:\nI would like you to come at my dinner party.\n thankyou! "
for(var i=0;i<guests.length;i++){
    console.log(+guests[i]+dinnerMessage)
}